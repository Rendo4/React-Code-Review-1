import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisableState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisableState = <NewCoffeeForm />
      buttonText = "Return To Coffee List";
    } else {
      currentlyVisableState = <CoffeeList />
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisableState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default CoffeeControl;