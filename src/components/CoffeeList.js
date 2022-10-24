import React from "react";
import Coffee from "./Coffee";

const mainCoffeeList = [
  {
    roast: "Dark",
    origin: "Brazil",
    stock: "120"
  },
  {
    roast: "Medium",
    origin: "Columbia",
    stock: "120"
  }
  ];

function CoffeeList() {
  return (
  <React.Fragment>
    <hr/>
    {mainCoffeeList.map((coffee, index) =>
    <Coffee roast={coffee.roast}
    origin={coffee.origin}
    stock={coffee.stock}
    key={index}/>
    )}
  </React.Fragment>
  );
}

  export default CoffeeList;