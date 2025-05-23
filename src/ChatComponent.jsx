import { useEffect } from "react";

export default function ChatComponent() {
  useEffect(() => {
    const socket = new WebSocket("wss://example.com");
    socket.onmessage = (event) => {
      console.log("message received: ", event.data);
    };
    return () => {
      socket.close();
      console.log("websocket closed");
    };
  }, []);

  return <div>Chat component</div>;
}
