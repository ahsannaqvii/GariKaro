import React from 'react'
import classes from './Input.module.css'
const Input=React.forwardRef((props,ref)=>{
    return (
        <div className={classes.input}>
           
            <label>{props.label}</label>
            {/* ...props.input sey saarey object ke member chale jaenge input ke pas */}
            <input  ref={ref} {...props.input}/>   
            
        </div>
    )
});

export default Input
