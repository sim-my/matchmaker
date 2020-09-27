import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationTab from './NotificationTab';
import '../resources/css/SimplePopover.scss';

export default function SimplePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <IconButton  className="popover__button" aria-describedby={id} onClick={handleClick}>
        <NotificationsIcon className="header__icon" color="secondary" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
          <NotificationTab/>
      </Popover>
    </div>
  );
}
