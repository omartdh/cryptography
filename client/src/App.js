import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cryptos from "./pages/Cryptos";
import Detail from "./pages/Detail";
import CoinDetailPage from "./pages/CoinDetailPage/index"
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Login from "./pages/Login/index";
// import withAuth from "./withAuth"
// import withAuth from '../../middleware';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        {/* <Route path={["/", "/cyptos"]} componenet={withAuth(Cryptos)} /> */}
          <Route exact path={["/", "/cryptos"]}>
            <Cryptos />
          </Route>
          {/* <Route path="/cryptos/:id" componenet={withAuth(Detail)} /> */}
          <Route exact path="/cryptos/:id">
            <Detail />
          </Route>
          <Route exact path="/coins/:id">
             <CoinDetailPage />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
