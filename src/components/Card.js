import React from "react";
const defaultImageUrl = "../";
const Card = ({ data }) => {
  const imageUrl = data.imageUrl || defaultImageUrl;
  return (
    <div className="card">
      <div className="img-wrapper">
        <img
          src={imageUrl}
          alt={data.name}
          onError={(e) => (e.target.src = "default.png")}
          style={{ width: "100%" }}
        />
      </div>
      <div className="card-info">
        <h2 className="">{data.name}</h2>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Card;
