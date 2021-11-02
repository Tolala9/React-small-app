import React from "react";
import {
  BrowserRouter as Router,
  Swich,
  Route,
  Link
} from "react-router-dom";

import Layout from "../components/Layout";

import Home from "./home";
import Favorites from "./favorites";
import MyBooks from "./mybooks";

const Webpages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/mybooks" component={MyBooks} />
        <Route exact path="/favorites" component={Favorites} />
      </Layout>
    </Router>
  );
};

export default Webpages;
