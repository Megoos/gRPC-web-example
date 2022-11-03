import { UsersClient } from "../proto/UserServiceClientPb";

export const client = new UsersClient("http://" + "0.0.0.0" + ":8080");
