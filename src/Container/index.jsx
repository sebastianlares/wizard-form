import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container max-w">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2 p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
