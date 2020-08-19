import React from "react";
import '../resources/css/SplashScreen.scss';
import heartbeat from '../resources/images/heartbeat.gif'

class SplashScreen extends React.Component {
  render() {
    // const style = { top: 0, bottom: 0, right: 0, left: 0, position: "fixed" };

    return (
      <div className="splashScreen">
          <img src = {heartbeat} />
          
    </div>
    );
  }
}

export default SplashScreen;
