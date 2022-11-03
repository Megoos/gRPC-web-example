import { User } from "../proto/user_pb";

/**
 * Client Streaming does not work on the web:
 * https://github.com/grpc/grpc-web/issues/1205
 */
export function createUsers(users: User[]) {
  // const stream = client.createUser(() => {});
  // for (const user of users) {
  //   stream.write(user);
  // }
  // stream.end();
}
