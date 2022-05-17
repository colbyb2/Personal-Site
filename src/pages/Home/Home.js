import React from "react";
import "./Home.css";
import CodeBlock from "./components/CodeBlock";
import AboutBlock from "./components/AboutBlock";

/*
 * Home Page
 */

function Home() {
  return (
    <div className="container">
      <CodeBlock />
      <AboutBlock />
    </div>
  );
}

export default Home;
