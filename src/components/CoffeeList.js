import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  return (
  <React.Fragment>
    <hr/>
    {props.mainCoffeeList.map((coffee) =>
    <Coffee 
    whenCoffeeClicked = { props.onCoffeeSelection }
    roast={coffee.roast}
    origin={coffee.origin}
    stock={coffee.stock}
    id={coffee.id}
    key={coffee.id}/>
    )}
  </React.Fragment>
  );
}

CoffeeList.PropTypes = {
  PropTypes: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;