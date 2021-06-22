import React from "react";

const TextInput = ({
  name,
  placeholder,
  handleChange,
  errorMessage,
  type = "text",
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        className={`input ${errorMessage && "error"}`}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
