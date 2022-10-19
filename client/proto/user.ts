import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { UsersClient as _users_UsersClient, UsersDefinition as _users_UsersDefinition } from './users/Users';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  users: {
    User: MessageTypeDefinition
    UserRequest: MessageTypeDefinition
    UserStatus: EnumTypeDefinition
    Users: SubtypeConstructor<typeof grpc.Client, _users_UsersClient> & { service: _users_UsersDefinition }
  }
}

