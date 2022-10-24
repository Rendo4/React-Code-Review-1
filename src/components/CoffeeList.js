import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  return (
  <React.Fragment>
    <hr/>
    {props.mainCoffeeList.map((coffee, index) =>
    <Coffee roast={coffee.roast}
    origin={coffee.origin}
    stock={coffee.stock}
    key={index}/>
    )}
  </React.Fragment>
  );
}

CoffeeList.PropTypes = {
  PropTypes: PropTypes.array
};

export default CoffeeList;