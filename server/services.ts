import {
  ServerUnaryCall,
  sendUnaryData,
  ServerWritableStream,
  ServerReadableStream,
  ServerErrorResponse,
} from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { IUsersServer } from "./proto/user_grpc_pb";
import { User, UserRequest } from "./proto/user_pb";
import { users } from "./db";
import { IGreeterServer } from "./proto/helloworld_grpc_pb";
import { HelloReply, HelloRequest } from "./proto/helloworld_pb";

export const GreeterServer: IGreeterServer = {
  sayHello(call: ServerUnaryCall<HelloRequest, HelloReply>, callback: sendUnaryData<HelloReply>) {
    const helloReply = new HelloReply();
    helloReply.setMessage("Hello! " + call.request.getName());
    callback(null, helloReply);
  },
};

export const UsersServer: IUsersServer = {
  getUser(call: ServerUnaryCall<UserRequest, User>, callback: sendUnaryData<User>) {
    const userId = call.request.getId();
    const user = users.find((u) => u.getId() === userId);

    if (!user) {
      const error: ServerErrorResponse = {
        name: "User Missing",
        message: `User with ID ${userId} does not exist.`,
      };
      callback(error, null);
      return;
    }

    console.log(`getUser: returning ${user.getName()} (id: ${user.getId()}).`);
    callback(null, user);
  },

  getUsers(call: ServerWritableStream<Empty, Empty>) {
    console.log(`getUsers: streaming all users.`);
    for (const user of users) call.write(user);
    call.end();
  },

  createUser(call: ServerReadableStream<Empty, User>, callback: sendUnaryData<Empty>) {
    console.log(`createUsers: creating new users from stream.`);

    let userCount = 0;

    call.on("data", (u) => {
      userCount++;
      users.push(u);
    });

    call.on("end", () => {
      console.log(`Created ${userCount} new user(s).`);
      callback(null, new Empty());
    });
  },
};
