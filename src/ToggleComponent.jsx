import { useState } from "react";

export default function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      setIsVisible((prev) => !prev);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle Child Component</button>
      {isVisible && <ChildComponent />}
    </div>
  );
}

function ChildComponent() {
  return <div>I am visible</div>;
}
