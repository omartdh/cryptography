import React from "react";
import css from "./style.css";

const CoinList = (props) => {

  return(
    
    <div class="list-group">
    {props.coins.map( res => <a className="card card body list-group-item list-group-item-action" href="#"><img src={res.image}/> {res.name} ${res.current_price}</a>)}
  </div>
  )
}
export default CoinList;
