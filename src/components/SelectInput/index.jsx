import React from "react";

const SelectInput = ({ providers, handleChange, name }) => {
  return (
    <select
      className="form-select input"
      aria-label="Electric utility provider"
      onChange={(e) => handleChange(e)}
      name={name}
    >
      {providers.map((provider) => (
        <option key={provider} value={provider}>
          {provider}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
