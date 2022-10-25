import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick= {() => props.whenCoffeeClicked(props.id)}>
        <h1>{props.roast}</h1>
        <h3>{props.origin}</h3>
        <p>${props.price} /per cup</p>
        <p><em>Current stock: {props.stock}lbs/ 130lbs</em></p>
        <hr/>
      </div>
      <button onClick={() => props.whenSellClicked(props.id)}>Sell a cup!</button>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  roast: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
};

export default Coffee;