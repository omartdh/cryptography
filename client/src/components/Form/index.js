import React from "react";
import "./style.css"
// This file exports the Input, TextArea, and FormBtn components

// export function InputList(props) {

//   console.log(props,"from props")
//   return (
   
//     <div className="dropdown">
//   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
//     {props.name}
//   </button>
//   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"{...props}>
//     {props.coins.map( res => <button className="dropdown-item" name="title" value={res.name}>{res.name}</button>)}
//     {/* <a class="dropdown-item" href="#" name="title" value="Bitcoin">Bitcoin</a> */}
//   </div>
// </div>

//   );
// }

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
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-info btnsub">
      {props.children}
    </button>
  );
}
