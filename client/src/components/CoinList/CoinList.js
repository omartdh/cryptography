import React from "react";
import { Link } from "react-router-dom";
import css from "./style.css";

const CoinList = (props) => {
 console.log(props, "from CoinList")

 const renderPrice = (detail) => {
  if (detail) {
    // console.log(detail, "hello price Newww")
    return (
      <>
        <span
          className={
            detail.price_change_24h < 0
              ? "badge badge-danger p-2"
              : "badge badge-success p-2"
          }
        >
          ${detail.current_price.toFixed(2)}
        </span>
      </>
    );
  }
};

  return(

    <ul class="list-group list-group-flush">
{props.coins.map( res => <Link to={`/coins/${res.id}`} className="card card body list-group-item list-group-item-action" >
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <img className="logo" src={res.image}/>
   <span className="coin-name">{res.name}</span>
    {renderPrice(res)}
  </li>
  </Link>)}
</ul>
    

  )
}
export default CoinList;