import React from "react";
import "./style.css"

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <span className="coin-data">${data.market_cap}</span>
            </div>
            <hr />
            <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Total Supply
              </span>
              <span className="coin-data">{data.total_supply}</span>
            </div>
          </div>
          </div>
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Volume(24H)</span>
              <span className="coin-data">${data.total_volume}</span>
            </div>
            <hr />
            <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">high 24h</span>
              <span className="coin-data">${data.high_24h}</span>
            </div>
          </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Circulating Supply
              </span>
              <span className="coin-data">{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">low 24h</span>
              <span className="coin-data">${data.low_24h}</span>
            </div>
          </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;

