import React, { useState } from "react";
import { Menu } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button
        className="toggle-btn"
        onClick={toogleSidebar}
        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        <Menu size={24} />
      </button>

      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
