import React, { useState, useEffect } from "react";

const Toggle_2 = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);    
  const [submitted, setSubmitted] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const uppercase = /[A-Z]/;
    const specialChar = /[!@#$%^&*]/;
    const isValidPassword =
      password.length >= 8 &&
      uppercase.test(password) &&
      specialChar.test(password);

    setIsValid(isValidPassword);
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Password Toggle & Validation</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            className=""
            type={isVisible ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={toggleVisibility}
            className="btn btn-secondary mx-2"
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        </div>

        <button type="submit" className="btn btn-success mt-2">
          Submit
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px", color: isValid ? "green" : "red" }}>
          {isValid
            ? "Password is valid!"
            : "Password must be at least 8 characters, contain an uppercase letter, and a special character."}
        </div>
      )}
    </div>
  );
};

export default Toggle_2;
