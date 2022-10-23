import React from "react";
import Coffee from "./Coffee";

function CoffeeList() {
  return (
  <React.Fragment>
    <Coffee 
      roast="Dark"
      origin="Brazil"
      stock="120" />
    <Coffee
      rost="medium"
      origin="columbia"
      stock="120" />
  </React.Fragment>
  );
}

  export default CoffeeList;