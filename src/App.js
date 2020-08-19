import React, { Component } from "react";
import SplashScreen from "./components/SplashScreen";
import MainApp from './MainApp';

export default class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(() =>  this.setState({ isLoading: false }), 3000);   
  }
  render() {
    return(
      this.state.isLoading ? <SplashScreen/> : <MainApp/>

    )
    // return <div className="app"></div>;
  }
}
