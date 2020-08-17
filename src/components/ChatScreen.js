import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "../resources/css/ChatScreen.scss";

const ChatScreen = () => {
  const [messages, setmessage] = useState([
    {
      name: "Elon",
      id:"1",
      message: "Hey!!",
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg",
    },
    {
      message: "Hey!!",
      id:"2",
    },
    {
      name: "Elon",
      id:"3",
      message: "How you doin?",
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg",
    },
  ]);
  return (
    <div className="chatScreen">
      <h3 className="chatScreen__timestamp">
        YOU'VE MATCHED ELON ON 10/10/2020
      </h3>
      {messages.map((message) => (
        <div  key={message.id}>
          {message.name ? (
            <div className="chatScreen__chatMessage">
              <Avatar
                className="chatMessage__image --sender"
                src={message.profilePic}
              />
              <p className="chatMessage__message --sender">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__chatMessage">
              {" "}
              <p className="chatMessage__message --receiver">
                {message.message}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatScreen;
