import React from "react";

const IndividualFormCard = ({
  children,
  question,
  id,
  shouldDisplayBasedOnNumber,
}) => {
  return (
    <div
      className="form-group transition"
      style={{
        display: `${shouldDisplayBasedOnNumber === id ? "block" : "none"}`,
      }}
    >
      <p>{question}</p>
      {children}
    </div>
  );
};

export default IndividualFormCard;
