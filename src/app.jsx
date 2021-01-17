import { default as identity } from "https://dev.jspm.io/lodash@4.17.15/identity";
import { default as React } from "https://dev.jspm.io/react@17.0.1";
import { default as Server } from "https://dev.jspm.io/react-dom@17.0.1/server";
import Template from "./example.html";
import styles from "./example.css";

// Output styles for a template string
console.log(styles);

// Output a possible template string
console.log(Template);

// Output lodash call
console.log(identity("<lodash identity call>"));

// Output render to string
let Greet = () => <h1>Hello, world!</h1>;
console.log(Server.renderToString(<Greet />));
