import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import SlideNews from "../../components/SlideNews";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, InputList, TextArea, FormBtn } from "../../components/Form";
import CoinList from "../../components/CoinList/CoinList";
import Chart from "../../components/Chart/index";
import Api from "../../utils/Api1";
import "./style.css"

function Cryptos() {
  // Setting our component's initial state
  const [cryptos, setCryptos] = useState([])
  const [formObject, setFormObject] = useState({})
  const [results, setResults] = useState([])
  const [theCoin, setTheCoin] = useState()
  // Load all cryptos and store them with setCryptos

  const fetchData = async () => {
    const response = await Api.get("/coins/markets/", {
      params: {
        vs_currency: "usd",
        ids: "bitcoin, ethereum, dogecoin, cardano, ripple, litecoin, bitcoin-cash, binancecoin, ethereum-classic"
      },
    });
    setResults(response.data)
    
  };

  useEffect(() => {
    fetchData();
    loadCryptos()
  }, [])

  
  
  // Loads all cryptos and sets them to cryptos
  function loadCryptos() {
    API.getCryptos()
      .then(res => 
        setCryptos(res.data)
        
      )
      .catch(err => console.log(err));
      
  };

  // Deletes a crypto from the database with a given id, then reloads cryptos from the db
  function deleteCrypto(id) {
    API.deleteCrypto(id)
      .then(res => {
        loadCryptos()
      })
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  
  function handleInputChange(event) {
    console.log(event.target, "from handleinpot")
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
    console.log(formObject, "formObject")
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.amount) {
      try {
        const searchResponse = await API.searchCrypto(formObject.title)
        if(searchResponse.data.length > 0){
          const updateResponse = await API.updateCrypto(searchResponse.data[0]._id, {
            ...searchResponse.data[0], amount : formObject.amount
          })
        } else {
          await API.saveCrypto({
            title: formObject.title,
            amount: formObject.amount,
            synopsis: formObject.synopsis
          })   
        }

      } catch (error) {
        console.log(error) 
      }
      loadCryptos();
    }
  };
  if(theCoin){
    console.log(theCoin, "9093333")
  }
  
 
    return (
      <>
      <SlideNews />
      <Container fluid>
        {/* <Row>
        <Col size="md-12">
          
          </Col>
          </Row> */}
          <Row>
          <Col size="md-3">
              <CoinList 
              coins = {results}
              />
          </Col>
          <Col size="md-6">
              <h2 className="addCrypto">Add New Crypto</h2>
            <form>
            <Input
                onChange={handleInputChange}
                name="title"
                placeholder="coin name (required)"
              />
              {/* {(results.length === 0) ? '' :
              <InputList
                coins = {results}
                onChange= {handleInputChange}
                name="Select Crypto"
                // onClick={handleInputChange}
              />
            } */}
              <Input
                onChange={handleInputChange}
                name="amount"
                placeholder="Amount holding (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Notes (Optional)"
              />
              <FormBtn
                disabled={!(formObject.amount && formObject.title)}
                onClick={handleFormSubmit}
              >
                Add
              </FormBtn>
        {(cryptos.length === 0) ? '' :
              <Chart
              coins={cryptos}
               />
            }
            </form>
          </Col>
          <Col size="md-3">
          <h2 className="my-coins">My Coins</h2>
              {cryptos.length ? (
              <List>
                {cryptos.map(crypto => (
                  <ListItem key={crypto._id}>
                    <Link to={"/cryptos/" + crypto._id}>
                      <table>
                        <tr>
                          <tr><strong>{crypto.title}</strong></tr>
                         <tr>{crypto.amount}</tr>
                        </tr>
                      </table>
                    </Link>
                    <DeleteBtn onClick={() => deleteCrypto(crypto._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>Please log in to add currency!</h3>
            )}
          </Col>
        </Row>
      </Container>
      </>
    );
  }


export default Cryptos;
