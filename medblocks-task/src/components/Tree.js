import React, { useState } from "react";

const Tree = () => {
  const [treedata, setTreeData] = useState("");

  return <div>Will be rendering a directory tree interface</div>;
};

export default Tree;

// recursion
// const logToConsole = (msg) => {
//   console.log(msg);
//   logToConsole(msg); // <- recursive function call
// }

// logToConsole("Hello World!");
