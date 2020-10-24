import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {/* Tinder card */}
            <TinderCards />
            {/* Buttons below tinder card */}
          </Route>
          <Route path="/chat">
            <h1>Chat-page!</h1>
            {/* Chats screen */}
          </Route>
          <Route path="/chat">
            <h1>Chat-page!</h1>
            {/* Chats screen */}
          </Route>

          {/* Individual chat screen */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
