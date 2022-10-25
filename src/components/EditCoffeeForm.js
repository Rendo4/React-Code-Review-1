import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({ roast: event.target.value, origin: event.target.origin, stock: parseInt(event.target.stock), id: coffee.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditCoffeeForm.PropTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
}

export default EditCoffeeForm;