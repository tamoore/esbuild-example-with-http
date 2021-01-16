# esbuild example with remote es modules

## Setup

Clone this repo to some filesystem that has `go` setup. All commands below
are from the project root.

## Building

Ensuring you have a `go` environment setup correctly:

```shell
go run cmd/main.go
```

A file named `out.js` should now be present on the file system.

### Note

You could also build this if you wanted

## Running

Once you have successfully built the output run:

```shell
node out.js
```
