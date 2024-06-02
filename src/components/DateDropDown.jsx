import React, { useState, useEffect } from 'react';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);

  const fetchOptions = async () => {
    const response = await fetch("../../public/sample-data.json");
    const data = await response.json();
    setOptions(data);
  }

  useEffect(() => {
    fetchOptions();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Developer
      </button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default DropDown;