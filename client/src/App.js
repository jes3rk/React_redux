import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';

const App = () =>
  <Router>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
    </div>
  </Router>;

export default App;
