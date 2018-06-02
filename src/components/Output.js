import React from 'react';

const Output = props => {
  return(
    <div className="output" >
      <pre>{ props.outputText }</pre>
    </div>
  )
}

export default Output;