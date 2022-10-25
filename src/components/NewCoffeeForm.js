import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ResuableForm from "./ReusableForm";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      roast: event.target.roast.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      stock: parseInt(event.target.stock.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
     <ResuableForm
     formSubmissionHandler={handleNewCoffeeFormSubmission}
     buttonText="Add Coffee" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
}

export default NewCoffeeForm;