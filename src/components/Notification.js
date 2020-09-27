import React from "react";
import Modal from "@material-ui/core/Modal";
import Avatar from "@material-ui/core/Avatar";
import "../resources/css/Notification.scss";

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
        <h1>Modal</h1>
      </Modal>
    </div>
  );
}
