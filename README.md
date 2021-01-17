# esbuild example with remote es modules

## Setup

Clone this repo to some filesystem that has `go` setup. All commands below
are from the project root.

Make sure that you have setup your $GOPATH correctly then run:

```shell
go get github.com/tamoore/esbx
```

### Updating

To update the build binary

```shell
go get -u github.com/tamoore/esbx
```

## Building

After install the binary above:

```shell
esbx --entrypoint ./src/app.jsx
```

A file named `build/app.js` should now be present on the file system.

## Running

Once you have successfully built the output run:

```shell
node out.js
```

This will verify that it has been built correctly
