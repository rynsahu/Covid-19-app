import React, {useEffect} from "react";
import io from "socket.io-client";
import queryString from "query-string";

let socket;

const Chat = () => {
  const ENDPOINT = "http://localhost:3050/";

  useEffect(() => {
    const {username} = queryString.parse(window.location.search);
    socket = io(ENDPOINT);

    // Emit when new user join
    socket.emit('join', {username});

    return () => {
      socket.emit('disconnect', {username});
      socket.off();
    };
  }, [ENDPOINT]);

  return <h1>Chat</h1>;
};

export default Chat;