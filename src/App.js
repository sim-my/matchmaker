import React from "react";
import "./App.scss";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import ChatScreen from "./components/ChatScreen";
import Chats from "./components/Chats";
import SwipeButtons from "./components/SwipeButtons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backbutton="/chat" name="Elon Musk"/>
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backbutton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
