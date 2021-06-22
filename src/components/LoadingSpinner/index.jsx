import React from "react";
import { useGlobalContext } from "../../contextAPI/globalContext";

const LoadingSpinner = () => {
  const { isSubmitting } = useGlobalContext();
  return (
    <div className={`${isSubmitting ? "redirect-loader" : "hidden"}`}>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <h1 style={{ fontSize: "24px" }}>
        <em> Please wait while we save your information. </em>
      </h1>
      <h2 className="loader-h2">
        <em>Do not close this window until we provide confirmation.</em>
      </h2>
    </div>
  );
};

export default LoadingSpinner;
