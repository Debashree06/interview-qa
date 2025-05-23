import React, { useState } from "react";

export default function FetchOnClick() {
  const [data, setData] = useState(null);

  const handleFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <button onClick={handleFetch}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
