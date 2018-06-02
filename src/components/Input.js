import React from 'react';

const Input = props => {
  return (
    <div className="control">
      <label>Number of Paragraphs</label>
      <input type="number" min="1" value={props.name} onChange={props.onChange} />
    </div>
  );
}

export default Input;

