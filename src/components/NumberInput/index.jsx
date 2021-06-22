import React from "react";

const NumberInput = ({
  value,
  handleChange,
  placeholder,
  name,
  length,
  errorMessage,
  label = "",
}) => {
  return (
    <div>
      <input
        type="text"
        className={`input ${errorMessage && "error"}`}
        maxLength={length}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={(e) => handleChange(e)}
      />
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {label}
    </div>
  );
};

export default NumberInput;
