import React, { useState } from "react";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";

const PhoneNumberInput = ({
  value,
  handleChange,
  placeholder,
  name,
  length,
  errorMessage,
  label,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    handleChange(e);
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };

  return (
    <div>
      <input
        type="tel"
        className={`input ${errorMessage && "error"}`}
        maxLength={length}
        value={inputValue}
        placeholder={placeholder}
        name={name}
        onChange={(e) => {
          handleInput(e);
        }}
      />
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {label}
    </div>
  );
};

export default PhoneNumberInput;
