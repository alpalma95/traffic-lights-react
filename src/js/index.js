//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
