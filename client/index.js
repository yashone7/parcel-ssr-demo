import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const domNode = document.getElementById("root");

console.log(domNode, "this is domNode!");

hydrateRoot(domNode, <App initialProps={window.initialState} />);
