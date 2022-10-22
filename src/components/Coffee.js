import React from "react";

function Coffee() {
  const roast = "Dark";
  const origin = "Brazil";
  const stock = "120 lbs";
  return (
    <React.Fragment>
      <Header />
      <h1>{roast}</h1>
      <h3>{origin}</h3>
      <p><em>Current stock: {stock}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Coffee;