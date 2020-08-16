import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import StarRateIcon from "@material-ui/icons/StarRate";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import '../resources/css/SwipeButtons.css';

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__undo">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__dislike">
        <ThumbDownAltIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__boost">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__like">
        <ThumbUpAltIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__ultralike">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
