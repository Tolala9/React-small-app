import React from "react";
import {
  BrowserRouter as Router,
  Swich,
  Route,
  Link
} from "react-router-dom";

import Layout from "../components/Layout";

import Travel from "./travel";
import About from "./about";
import Business from "./business";
import Contact from "./contact";

const Webpages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Travel} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Layout>
    </Router>
  );
};

export default Webpages;
