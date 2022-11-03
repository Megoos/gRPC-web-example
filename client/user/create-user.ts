import { User } from "../proto/user_pb";
import { client } from "./client";

export function createUser(user: User) {
  return new Promise<void>((resolve, reject) => {
    client.createUser(user, null).then(
      () => {
        resolve();
      },
      (err) => {
        reject(err);
      }
    );
  });
}
