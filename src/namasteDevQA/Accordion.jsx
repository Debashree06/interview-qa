import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles.css";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="accordion">
        <p>No items available.</p>
      </div>
    );
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div key={index} className="accordion-item">
            <button
              className="accordion-title"
              onClick={() => handleTitleClick(index)}
              aria-expanded={isActive}
            >
              <span className="accordion-title-text">{item.title}</span>
              <span className="accordion-icon">
                {isActive ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {isActive && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
