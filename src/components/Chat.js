import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../resources/css/Chat.scss';

const Chat = ({name, message, profilePic, timestamp}) => {
    return (
        <div className="chat">
            <Avatar className="chat__image" alt={name.toString()} src={profilePic}/>
            <div className="chat__details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
        
    )
}

export default Chat
