import * as React from "react";
import * as ReactDom from "react-dom";
import HelloWorld from "./HelloWorld";

ReactDom.render(
    <HelloWorld name="world" />,
    document.getElementById("root")
);