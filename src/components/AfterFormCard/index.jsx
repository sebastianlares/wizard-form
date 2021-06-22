import React from "react";

const AfterFormCard = ({ img, alt, h3, p }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div className="card-wrap">
        <div className="solar-icon">
          <img src={img} alt={alt} className="img-fluid" />
        </div>
        <div className="solar-content">
          <h3 className="content-h3">{h3}</h3>
          <p className="content-p">{p}</p>
        </div>
      </div>
    </div>
  );
};

export default AfterFormCard;
