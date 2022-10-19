import { Server, ServerCredentials } from "@grpc/grpc-js";
import { GreeterService } from "./proto/helloworld_grpc_pb";
import { UsersService } from "./proto/user_grpc_pb";
import { UsersServer, GreeterServer } from "./services";

const server = new Server();
server.addService(UsersService, UsersServer);
server.addService(GreeterService, GreeterServer);

const port = 9090;
const uri = `0.0.0.0:${port}`;
console.log(`Listening on ${uri}`);
server.bindAsync(uri, ServerCredentials.createInsecure(), (err) => {
  if (err) console.log(err);
  server.start();
});
