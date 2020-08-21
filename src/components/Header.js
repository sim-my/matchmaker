import React, {useState} from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../resources/css/Header.scss";
import PersonIcon from "@material-ui/icons/Person";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import heartLogo from "../resources/images/heartLogo.gif";
import Profile from './Profile';

const Header = ({ backbutton, name }) => {
  const history = useHistory();
  const [state, setState] = useState({
    isPaneOpen: false,
  });
  return (
    <div className="header">
      {backbutton ? (
        <div className="header__withbackbutton">
          <IconButton onClick={() => history.replace(backbutton)}>
            <ArrowBackIosIcon className="header__icon" color="primary" />
          </IconButton>
          <div className="header__mid"> {name ? <h3>{name}</h3> : <img height="90px" src={heartLogo} />}</div>
        </div>
      ) : (
        <div className="header__main">
          <img height="80px" src={heartLogo} />
          <IconButton onClick={() => setState({ isPaneOpen: true })}>
            <PersonIcon className="header__icon" color="primary" />
          </IconButton>
          <div className="header__widget">
            <Link to="/chat">
              <IconButton>
                <SendSharpIcon className="header__icon" color="primary" />
              </IconButton>
            </Link>
          </div>
        </div>
      )}
      <SlidingPane
        className="sliderpane"
        overlayClassName="profile-pane"
        from="left"
        isOpen={state.isPaneOpen}
        title="Elon's Profile"
        width="400px"
        onRequestClose={() => {
          setState({ isPaneOpen: false });
        }}
      >
        <Profile/>
      </SlidingPane>
    </div>    
  );
};

export default Header;
