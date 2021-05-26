import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HistoryChart from "../../components/HistoryChart/HistoryChart";
import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import CoinData from "../../components/CoinData/CoinData";
import Api from "../../utils/Api1";



  const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        Api.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        Api.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        Api.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        Api.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);
      console.log(coinData, "from CoinDetailsPage");

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <Container fluid>
      <Row>
      <Col size="md-3">
        </Col>
        <Col size="md-6">
        <CoinData data={coinData.detail} />
        </Col>
        <Col size="md-3">
        </Col>
        </Row>

        <Row>
        <Col size="md-3">
        </Col>
        <Col size="md-6">
        {(coinData.length === 0) ? '' :
        <HistoryChart data={coinData} />
      }    
        </Col>
        <Col size="md-3">
        </Col>
      </Row>
    </Container>
    );
  };

  return renderData();
};


export default CoinDetailPage;
