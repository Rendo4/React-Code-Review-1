import React from "react";
import Coffee from "./Coffee";

function CoffeeDetail(props) {
  return (
    <React.Fragment>
      <h1> Coffee Detail</h1>
      <h3>{coffee.origin} - {coffee.roast}</h3>
      <p>{cofee.stock}</p>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: propTypes.object
}

export default CoffeeDetail;