import React, { useState } from "react";

const RangeInput = ({ value, name, handleChange }) => {
  const [price, setPrice] = useState(value);

  const handleChangeInput = (e) => {
    handleChange(e);
    setPrice(e.target.value);
  };
  return (
    <>
      <label htmlFor="electricBill" className="range-label">
        ${price}
      </label>
      <input
        type="range"
        className="form-range"
        min="10"
        value={value}
        name={name}
        step="1"
        max="800"
        onChange={(e) => {
          handleChangeInput(e);
        }}
      />
      <div className="d-flex justify-content-between">
        <p className="font">$10</p>
        <p className="font">$800+</p>
      </div>
    </>
  );
};
export default RangeInput;
