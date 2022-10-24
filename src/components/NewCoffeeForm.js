import React from "react";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.roast.value);
    console.log(event.targert.origin.value);
    console.log(event.target.stock.value);
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

export default NewCoffeeForm;