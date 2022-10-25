import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  return (
  <React.Fragment>
    <hr/>
    {props.coffeeList.map((coffee) =>
    <Coffee 
      whenCoffeeClicked = { props.onCoffeeSelection }
      whenSellClicked = {props.onCoffeeSell }
      roast={coffee.roast}
      price={coffee.price}
      origin={coffee.origin}
      stock={coffee.stock}
      id={coffee.id}
      key={coffee.id}/>
    )}
  </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  onCoffeeSell: PropTypes.func
};

export default CoffeeList;