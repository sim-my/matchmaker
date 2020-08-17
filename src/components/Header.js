import React from 'react';
import '../resources/css/Header.scss';
import PersonIcon from '@material-ui/icons/Person';
import GroupWorkSharpIcon from '@material-ui/icons/GroupWorkSharp';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';

const Header = () => {
    return(        
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" color="primary"/>
            </IconButton>
            <Link to="/">
            <GroupWorkSharpIcon className="header__logo" color="secondary" fontSize="large"/>
            </Link>
            <Link to="/chat">
            <IconButton>
                <SendSharpIcon className="header__icon" color="primary"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header;