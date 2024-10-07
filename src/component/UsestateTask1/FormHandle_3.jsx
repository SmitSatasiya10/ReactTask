import React, { useState } from "react";

const FormHandle_3 = () => {
  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
    date: "",
    number: 0,
    password: "",
    color: "#fff",
    range: 50,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="container w-50 border mt-4"
      style={{ backgroundColor: formData.color }}
    >
      <h2 className="text-center">Form Input Handling with useState</h2>
      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Text
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>

        {/* Checkbox Input */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="checkbox">
            Checkbox
          </label>
        </div>

        {/* Radio Buttons */}
        <div className="mb-3">
          <label className="form-label">Radio</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="radio1"
              name="radio"
              value="option1"
              checked={formData.radio === "option1"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="radio1">
              Option 1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="radio2"
              name="radio"
              value="option2"
              checked={formData.radio === "option2"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="radio2">
              Option 2
            </label>
          </div>
        </div>

        {/* Select Dropdown */}
        <div className="mb-3">
          <label htmlFor="select" className="form-label">
            Select
          </label>
          <select
            className="form-select"
            id="select"
            name="select"
            value={formData.select}
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        {/* Date */}
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {/* Number */}
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Color */}
        <div className="mb-3">
          <label htmlFor="color" className="form-label">
            Color
          </label>
          <input
            type="color"
            className="form-control form-control-color"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>

        {/* Range */}
        <div className="mb-3">
          <label htmlFor="range" className="form-label">
            Range
          </label>
          <input
            type="range"
            className="form-range"
            id="range"
            name="range"
            value={formData.range}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandle_3;
