import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, InputList, TextArea, FormBtn } from "../components/Form";
import CoinList from "../components/CoinList/CoinList";
import NewsLines from "../components/NewsLines";
import Api from "../utils/Api1";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})
  const [results, setResults] = useState([])
  // Load all books and store them with setBooks
  
  const fetchData = async () => {
    const response = await Api.get("/coins/markets/", {
      params: {
        vs_currency: "usd",
        ids: "bitcoin, ethereum, dogecoin, cardano, ripple, litecoin, bitcoin-cash, binancecoin, ethereum-classic, "
      },
    });
    setResults(response.data)
    
  };
  
  useEffect(() => {
    loadBooks()
    fetchData();
  }, [])

  

  // useEffect(() => {

  
  // },[]);
  console.log(results, "from results")
  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };
  


    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Jumbotron>
              <h1> Crypto Prices</h1>
              </Jumbotron>
              <CoinList 
              coins = {results} />
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>My Wallet</h1>
            </Jumbotron>
            <Row>
              <Col size="md-6">
              <h2>Add New Crypto</h2>
            <form>
              <InputList
                coins = {results}
                onChange= {handleInputChange}
                name="Select Crypto"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Amount holding (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Notes (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
            </Col>
            <Col size="md-6">
              <h2>My Coins</h2>
              {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title}: {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No moniez :(</h3>
            )}
            </Col>
            </Row>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <h1>Crypto News</h1>
            </Jumbotron>
            <NewsLines />
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
