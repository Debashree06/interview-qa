import React, { useState } from "react";
function ChipInput() {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !chips.includes(trimmedValue)) {
        setChips([...chips, trimmedValue]);
        setInputValue("");
      }
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteChip = (chipToDelete) => {
    setChips(chips.filter((chips) => chips !== chipToDelete));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "10px",
          justifyContent: "center",
        }}
      >
        {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              padding: "4px 8px",
              fontSize: "14px",
            }}
          >
            {chip}
            <button
              onClick={() => handleDeleteChip(chip)}
              style={{
                marginLeft: "8px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#757575",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a chip and press Enter"
        style={{ padding: "8px", width: "200px" }}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default ChipInput;
