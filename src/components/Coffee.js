import React from "react";
import PropTypes from "prop-types";

function Coffee() {
  return (
    <React.Fragment>
      <Header />
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