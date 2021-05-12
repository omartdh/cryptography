import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import mainPage from "./pages/mainPage";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/index";
import "./App.css";

const App = () => {
  return (
    <div className="container">
        <BrowserRouter>
          <Nav />
          <Header />
          <Route exact path="/" component={mainPage} />
        </BrowserRouter>
    </div>
  );
};

export default App;
