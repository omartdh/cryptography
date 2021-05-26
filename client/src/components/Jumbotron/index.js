import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron" style={{ height: 150, clear: "both", textAlign: "center"}}>
      {children}
    </div>
  );
}

export default Jumbotron;



