import React from "react";

const RadioInput = ({ name, value, id, handleChange, isChecked }) => {
  return (
    <div className="form-check individual-radio">
      <input
        type="radio"
        className="form-check-input radio-color"
        name={name}
        value={value}
        id={id}
        defaultChecked={isChecked}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={id} className="form-check-label">
        {value}
      </label>
    </div>
  );
};

export default RadioInput;
