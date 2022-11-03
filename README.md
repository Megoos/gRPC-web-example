# gRPC-Web

![Alt text](/grpc.png?raw=true "gRPC-Web")

## Configure the Proxy

We configure Envoy to listen at port `:8080`, and forward any gRPC-Web requests to a
cluster at port `:9090`.

## Dependencies

Next, we need to install Dependencies:

```sh
$ npm install
```

## Generate Protobuf Messages and Client Service Stub

To generate the protobuf messages and client service stub class from your
`.proto` definitions, we need:

- the `protoc` binary, _and_
- the `protoc-gen-grpc-web` plugin.

> You can download the `protoc-gen-grpc-web` protoc plugin from
> [release](https://github.com/grpc/grpc-web/releases) page.
>
> If you don't already have `protoc` installed, you will have to download it
> first from [here](https://github.com/protocolbuffers/protobuf/releases).
>
> Make sure they are both executable and are discoverable from your PATH.
>
> For example, in MacOS, you can do:
>
> ```sh
> $ sudo mv ~/Downloads/protoc-gen-grpc-web-1.4.1-darwin-x86_64 \
>   /usr/local/bin/protoc-gen-grpc-web
> $ sudo chmod +x /usr/local/bin/protoc-gen-grpc-web
> ```

When you have both `protoc` and `protoc-gen-grpc-web` installed, you can now
run this command:

```sh
$ npm run proto:server
$ npm run proto:client
```

## Run the Example!

We are ready to run the example. The following set of commands will
run the 3 processes all in the background.

1.  Run the NodeJS gRPC Service. This listens at port `:9090`.

```sh
$ npm run start:server
```

2.  Run the Envoy proxy. The `envoy.yaml` file configures Envoy to listen to
    browser requests at port `:8080`, and forward them to port `:9090` (see
    above).

```sh
$ npm run start:envoy
```

3.  Run the Web Server with parcel.

```sh
$ npm run start:client
```

When these are all ready, you can open a browser tab and navigate to

```
localhost:1234
```

Open up the developer console and you should see the following printed out:

```
Hello! World
```

...and users DB info.
