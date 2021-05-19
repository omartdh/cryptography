import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function InputList(props) {
  console.log(props,"from props")
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {props.name}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {props.coins.map( res => <a className="dropdown-item" href="#">{res.name}</a>)}
  </div>
</div>

  );
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
