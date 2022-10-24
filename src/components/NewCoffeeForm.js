import React from "react";
import { v4 } from "uuid";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      roast: event.target.roast.value,
      origin: event.target.origin.value,
      stock: event.target.stock.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
        type="text"
        name="roast"
        placeholder="Type of coffee roast" />
        <input
        type="text"
        name="origin"
        placeholder="Where is the coffee from" />
        <input
        type="text"
        name="stock"
        placeholder="How many lbs is the bag you're entering" />
        <button type="submit">Add to Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.PropTypes = {
  onNewCoffeeCreation: PropTypes.func
}

export default NewCoffeeForm;