import { User, UserStatus } from "./proto/user_pb";
import { allUsers } from "./user/all-users";
import { createUser } from "./user/create-user";
import { getUser } from "./user/get-user";

export async function runUserExample() {
  const user = await getUser(1);
  console.log(user.toString());

  const jim = new User();
  jim.setName("Jim");
  jim.setAge(10);
  jim.setId(20);
  jim.setStatus(UserStatus.OFFLINE);
  await createUser(jim);
  console.log(`\nCreated user ${jim.toString()}`);

  const users = await allUsers();
  console.log(`\nListing all ${users.length} users`);
  for (const user of users) {
    console.log(user.toString());
  }
}
