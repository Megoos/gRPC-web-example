import { User, UserRequest } from "../proto/user_pb";
import { client } from "./client";

export function getUser(id: number) {
  return new Promise<User>((resolve, reject) => {
    const request = new UserRequest();
    request.setId(id);

    client.getUser(request, null).then(
      (user) => {
        resolve(user);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
