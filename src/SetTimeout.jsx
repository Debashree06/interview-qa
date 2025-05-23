import React, { useState } from "react";

export default function SetTimeout() {
  const [message, setMessage] = useState("waiting...");

  const handleClick = () => {
    setTimeout(() => {
      setMessage("Message delay");
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleClick}>Delay data</button>
      <p>{message}</p>
    </div>
  );
}
