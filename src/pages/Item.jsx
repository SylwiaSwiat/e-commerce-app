import React from "react";
import "./Item.css";

const Item = ({ title, price, image, handleAddProduct, item }) => {
  return (
    <div className="item">
      <div className="itemPhotoAndInfo">
        <img src={image} alt="" />
        <div className="itemInfo">
          <h5>{title}</h5>
          <p>Price: {price}$</p>
        </div>
      </div>
      <button className="buy" onClick={() => handleAddProduct(item)}>
        Add to cart
      </button>
    </div>
  );
};

export default Item;
