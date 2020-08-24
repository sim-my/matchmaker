import "./App.scss";
import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import ChatScreen from "./components/ChatScreen";
import Chats from "./components/Chats";
import SwipeButtons from "./components/SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import ChooseScreen from "./components/ChooseScreen";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

const MainApp = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backbutton="/chat" name="Elon Musk" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backbutton="/" />
            <Chats />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/swipeCard">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <ChooseScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MainApp;
