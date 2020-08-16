import React from 'react';
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import Chats from './components/Chats';
import SwipeButtons from './components/SwipeButtons';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route path="/chat">
            <Chats/>
          </Route>   
          <Route path="/">
           <TinderCards/>
           <SwipeButtons/>
          </Route>          
        </Switch>        
      </Router>      
    </div>
  );
}

export default App;
