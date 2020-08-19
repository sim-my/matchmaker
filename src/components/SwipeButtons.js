import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import IconButton from "@material-ui/core/IconButton";
import '../resources/css/SwipeButtons.scss';

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
     <IconButton className="swipeButtons__button --dislike">
        <ThumbDownAltIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__button --undo">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__button --like">
        <ThumbUpAltIcon fontSize="large" />
      </IconButton>
      </div>
  );
};

export default SwipeButtons;
