import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";

// OR you can use the wildcard *
// import * as pi from "./math.js";
// if you console.log(pi), you will see that pi is an object with three elements (two functions and the default option)
// This is generally discouraged as it is difficult to know what you are using. It is better to only import what you need to use

// Modules from ES6
// Here we have a simple Project
// We have imported const pi from our created math.js
// We can also import the none default values. This is only able if we specify their actual names in the module
// These can now be used, but remember to add the () as we have only exported the function

// Modules enables us to split up our JS files into much smaller chunks
// If you want to know more, see https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export
// We can only reliably use ES6, because we are relying on Babel to convert it into script that can be read on almost all browesers

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
