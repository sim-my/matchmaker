import React from 'react';
import Chat from './Chat.js';

const Chats = () => {
    return (
        <div className="chats">
        <Chat 
            name="Elon"
            message="Hey!!"
            timestamp="1 min ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"
        /> 

        <Chat 
            name="Elon"
            message="Hey!! How you doing?Hey!! How you doing?"
            timestamp="1 min ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"
        />
        </div>
    )
}

export default Chats
