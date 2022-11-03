import { GreeterClient } from "./proto/HelloworldServiceClientPb";
import { HelloReply, HelloRequest } from "./proto/helloworld_pb";

const greeterClient = new GreeterClient("http://" + "0.0.0.0" + ":8080");

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

export async function runHelloExample() {
  const result = await sayHello();

  console.log(result.getMessage());
}
