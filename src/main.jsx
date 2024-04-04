import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import { Header } from "./Header";
import { Example1 } from "./Example1";
import { Example2 } from "./Example2";
import { Example3 } from "./Example3";
import { Example4 } from "./Example4";
import { Example5 } from "./Example5";
import { Example6 } from "./Example6";
import { Example7 } from "./Example7";

export function App() {
  return (
    <>
      <Header />
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
      <Example6 />
      <Example7 />
    </>
  );
}

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
