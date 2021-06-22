import React from "react";
import { useGlobalContext } from "../../contextAPI/globalContext";

const LoadingBar = () => {
  const { loading } = useGlobalContext();
  return (
    <div className={`${loading ? "loading" : "hidden"}`}>
      <div className="loader">
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default LoadingBar;
