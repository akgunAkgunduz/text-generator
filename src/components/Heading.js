import React from 'react';

const Heading = props => {
  return (
    <div className="heading">
      <h1>{props.main}</h1>
      <h5>{props.sub}</h5>
    </div>
  );
}

export default Heading;