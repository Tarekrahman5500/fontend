import React from 'react';
import './style.css'
import CardIndex from "../ui/card/CardIndex.jsx";
const PriceDetails = (props) => {
    return (
        <CardIndex headerLeft={"Price Details"} style={{ maxWidth: "380px" }}>
      <div
        style={{
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Price ({props.totalItem} items)</div>
          <div>{props.totalPrice}</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Delivery Charges</div>
          <div>FREE</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Total Amount</div>
          <div>{props.totalPrice}</div>
        </div>
      </div>
    </CardIndex>
  );
};

export default PriceDetails;