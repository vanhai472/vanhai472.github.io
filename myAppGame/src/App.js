import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NormalLoginForm from "./components/Login";
import About from "./components/about";
import DetailGame from "./components/DetailGame";

const App = () => { 
  return (
    <Router>
      <Route path="/" exact component={NormalLoginForm} name="Login" />
      <Route path="/newGame" component={About} name="About" />
      <Route exact path="/detail/:id" component={DetailGame} />
    </Router>
  );
};

export default App;
