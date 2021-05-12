import React, { useEffect, useState } from "react";
import Api from "../utilis/Api";

const CoinList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Api.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin, dogecoin"
        },
      });
      console.log(response.data);
    };
    fetchData();

  },[]);

  return(
    <div></div>
  )
}
export default CoinList;
