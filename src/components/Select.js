import React from 'react';

const Select = props => {
  return (
    <div className="control">
      <label>Text Format</label>
      <select value={props.name} onChange={props.onChange}>
        <option value="">Plain Text</option>
        <option value="p">HTML</option>
      </select>
    </div>
  );
}

export default Select;