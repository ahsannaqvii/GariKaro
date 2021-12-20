import React from 'react';

import classes from './Input.module.css';

const InputForm = (props) => {
 
 return(
    //  <React.Fragment>
    <div
    className={`${classes.control} ${
      props.emailIsValid === false ? classes.invalid : ''
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange} 
      onBlur={props.onBlur}
    />
  </div>
//   {/* </React.Fragment> */}
  );
};

export default InputForm;
