import React from "react";
import Coffee from "./Coffee";

function CoffeeDetail(props) {
  return (
    <React.Fragment>
      <h1> Coffee Detail</h1>
      <h3>{coffee.origin} - {coffee.roast}</h3>
      <p>{cofee.stock}</p>
      <button onClick={ props.onClickingEdit }>Update Inventory</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default CoffeeDetail;