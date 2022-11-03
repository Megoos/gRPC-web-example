// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';
import type { UserRequest as _users_UserRequest, UserRequest__Output as _users_UserRequest__Output } from '../users/UserRequest';

export interface UsersClient extends grpc.Client {
  CreateUser(argument: _users_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _users_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _users_User, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _users_User, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_User, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_User, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  CreateUsers(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_users_User>;
  CreateUsers(metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_users_User>;
  CreateUsers(options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_users_User>;
  CreateUsers(callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_users_User>;
  createUsers(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_users_User>;
  createUsers(metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_users_User>;
  createUsers(options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_users_User>;
  createUsers(callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_users_User>;
  
  GetUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _users_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _users_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _users_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _users_UserRequest, callback: grpc.requestCallback<_users_User__Output>): grpc.ClientUnaryCall;
  
  GetUsers(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_users_User__Output>;
  GetUsers(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_users_User__Output>;
  getUsers(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_users_User__Output>;
  getUsers(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_users_User__Output>;
  
}

export interface UsersHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_users_User__Output, _google_protobuf_Empty>;
  
  CreateUsers: grpc.handleClientStreamingCall<_users_User__Output, _google_protobuf_Empty>;
  
  GetUser: grpc.handleUnaryCall<_users_UserRequest__Output, _users_User>;
  
  GetUsers: grpc.handleServerStreamingCall<_google_protobuf_Empty__Output, _users_User>;
  
}

export interface UsersDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_users_User, _google_protobuf_Empty, _users_User__Output, _google_protobuf_Empty__Output>
  CreateUsers: MethodDefinition<_users_User, _google_protobuf_Empty, _users_User__Output, _google_protobuf_Empty__Output>
  GetUser: MethodDefinition<_users_UserRequest, _users_User, _users_UserRequest__Output, _users_User__Output>
  GetUsers: MethodDefinition<_google_protobuf_Empty, _users_User, _google_protobuf_Empty__Output, _users_User__Output>
}
