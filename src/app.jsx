import { default as identity } from "https://dev.jspm.io/lodash@4.17.15/identity";
import { default as React } from "https://dev.jspm.io/react@17.0.1";
import { default as Server } from "https://dev.jspm.io/react-dom@17.0.1/server";

// Output lodash call
console.log(identity("test"));

// Output render to string
let Greet = () => <h1>Hello, world!</h1>;
console.log(Server.renderToString(<Greet />));
