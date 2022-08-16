import React from "react";
import "./CodeBlock.css";

function CodeBlock() {
  return (
    <div className="code-screen">
      <div className="code-import-container">
        <div id="code-import-statement" className="code-text">
          import
        </div>
        <div className="import-text">Introduction</div>
      </div>
      <div className="code-function-header code-function-text">
        <div className="code-function-header-function code-text-normal">
          function
        </div>
        <div className="code-function-header-name code-text-normal">
          Welcome
        </div>
        <div className="code-function-header-parentheses code-text-normal">
          ()
        </div>
        <div className="code-function-header-bracket code-text-normal">
          {"{"}
        </div>
      </div>
      <div className="code-function">
        <CodeLine index={1}>Hello!</CodeLine>
        <CodeLine index={2}>I'm Colby.</CodeLine>
        <CodeLine index={3}>Check out my portfolio and other</CodeLine>
        <CodeLine index={4}>info throughout the site!</CodeLine>
        <CodeLine index={5}>:)</CodeLine>
      </div>
      <div className=" code-function-text code-function-closing-bracket code-text-normal">
        {"}"}
      </div>
    </div>
  );
}

const CodeLine = ({ children, index }) => {
  return (
    <div className="typing-container">
      <div className={`typed-out-${index} code-text-normal`}>{children}</div>
    </div>
  );
};

export default CodeBlock;
