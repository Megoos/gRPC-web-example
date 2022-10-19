// Original file: proto/user.proto

import type { UserStatus as _users_UserStatus } from '../users/UserStatus';

export interface User {
  'id'?: (number);
  'name'?: (string);
  'age'?: (number);
  'status'?: (_users_UserStatus | keyof typeof _users_UserStatus);
}

export interface User__Output {
  'id': (number);
  'name': (string);
  'age': (number);
  'status': (keyof typeof _users_UserStatus);
}
