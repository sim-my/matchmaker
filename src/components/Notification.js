import React from "react";
import Modal from "@material-ui/core/Modal";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';

import "../resources/css/Notification.scss";
import PersonIcon from '@material-ui/icons/Person';

export default function SimpleModal(props){
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className={props.class + " notification"}
        onClickCapture={handleOpen}
      >
        <Avatar className="notification__image" src={props.profilePic} />
        <div className="notification__details">
          <p>{props.message}</p>
        </div>
        <p className="notification__timestamp">{props.timestamp}</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal__content">
          <h4>You and Elon Matched!!</h4>
          <div className="action__buttons">
            <div className="action__profile">
            <IconButton>
              <PersonIcon fontSize="large" color="secondary"/>
            </IconButton>
              </div>            
            <div className="action__chat">
            <IconButton>
              <ChatIcon fontSize="large" color="primary" />
            </IconButton>
            </div>
          </div>
        </div>

      </Modal>
    </div>
  );
}
