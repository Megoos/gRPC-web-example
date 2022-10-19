import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { GreeterClient } from "./proto/HelloworldServiceClientPb";
import { HelloReply, HelloRequest } from "./proto/helloworld_pb";
import { UsersClient } from "./proto/UserServiceClientPb";
import { User } from "./proto/user_pb";

const usersClient = new UsersClient("http://" + "0.0.0.0" + ":8080");
const greeterClient = new GreeterClient("http://" + "0.0.0.0" + ":8080");

function getUsers() {
  return new Promise<User[]>((resolve, reject) => {
    const stream = usersClient.getUsers(new Empty());
    const users: User[] = [];
    stream.on("data", (user) => users.push(user));
    stream.on("error", reject);
    stream.on("end", () => resolve(users));
  });
}

function sayHello() {
  return new Promise<HelloReply>((resolve, reject) => {
    const request = new HelloRequest();
    request.setName("World");

    greeterClient
      .sayHello(request, null)
      .then((message) => resolve(message))
      .catch((error) => reject(error));
  });
}

sayHello().then((value) => {
  console.log(value.getMessage());
});

getUsers().then((users) => {
  console.log(users.toString());
});
