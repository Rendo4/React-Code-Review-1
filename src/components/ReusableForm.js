import React from "react";
import PropTypes from "prop-types";

function ResuableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type="text"
        name="roast"
        placeholder="roast" />
        <input
        type="text"
        name="origin"
        placeholder="Where is the coffee from?" />
        <input
        type="text"
        name="stock"
        placeholder="How many lbs of stock do you have" />
      </form>
    </React.Fragment>
  );
}

ResuableForm.PropTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ResuableForm;