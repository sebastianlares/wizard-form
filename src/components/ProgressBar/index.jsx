import React from "react";
import { useGlobalContext } from "../../contextAPI/globalContext";

const ProgressBar = () => {
  const { count } = useGlobalContext();
  return (
    <div className="progress progress-div">
      <div className="progress-bar " style={{ width: `${count}0%` }}></div>
    </div>
  );
};

export default ProgressBar;
