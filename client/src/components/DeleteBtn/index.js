import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button type="button" className="btn xbtn" {...props} role="button" tabIndex="0">
      X
    </button>
  );
}

export default DeleteBtn;
