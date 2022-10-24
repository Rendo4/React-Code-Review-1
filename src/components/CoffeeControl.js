import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList, formVisibleOnPage: false });
  }

  render(){
    let currentlyVisableState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisableState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      buttonText = "Return To Coffee List";
    } else {
      currentlyVisableState = <CoffeeList coffeList={this.state.mainCoffeeList} />
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