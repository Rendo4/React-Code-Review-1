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
        tpye="number"
        min="0"
        name="price"
        placeholder="How much does it cost" />
        <input
        type="number"
        min="0"
        max="130"
        name="stock"
        placeholder="How many lbs of stock do you have" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ResuableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ResuableForm;