import React from "react";
import "../resources/css/Header.scss";
import PersonIcon from "@material-ui/icons/Person";
import GroupWorkSharpIcon from "@material-ui/icons/GroupWorkSharp";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

const Header = ({ backbutton, name }) => {
  const history = useHistory();
  return (
    <div className="header">
       {backbutton ? (
        <div className="header__withbackbutton">
          <IconButton onClick={() => history.replace(backbutton)}>
            <ArrowBackIosIcon className="header__icon" color="primary" />
          </IconButton>
          <h3>{name}</h3>       
        </div>
      ) : (
        <div className="header__main">
          <IconButton>
            <PersonIcon className="header__icon" color="primary" />
          </IconButton>
          <Link to="/">
            <GroupWorkSharpIcon
              className="header__logo"
              color="secondary"
              fontSize="large"
            />
          </Link>
          <Link to="/chat">
            <IconButton>
              <SendSharpIcon className="header__icon" color="primary" />
            </IconButton>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
