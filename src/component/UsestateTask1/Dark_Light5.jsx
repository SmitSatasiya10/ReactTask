import React, { useState } from "react";

const Dark_Light5 = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleBtn = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`container-fluid ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

        <button
          className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
          onClick={toggleBtn}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <p className="mt-4">
        This is an example of switching between dark and light themes using
        React's <code>useState</code>. When you click the button, the theme will
        toggle, changing the background and text colors.
      </p>
    </div>
  );
};

export default Dark_Light5;
