//fetch data on component mount()

import React, { useState, useEffect } from "react";

export default function FetchData() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/7")
      .then((response) => response.json())
      .then((data) => setData(data.name))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1> User Name: {data}</h1>
    </div>
  );
}
