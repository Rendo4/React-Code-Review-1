import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function Coffee(props) {
  return (
    <React.Fragment>
      <h1>{props.roast}</h1>
      <h3>{props.origin}</h3>
      <p><em>Current stock: {props.stock}lbs</em></p>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  roast: PropTypes.string,
  origin: PropTypes.string,
  stock: PropTypes.string
};

export default Coffee;