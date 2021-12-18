import React from 'react'
import classes from './CarFound.module.css'
import { Link } from "react-router-dom";

const CarFound = (props) => {
    return (
        <li className={classes.item}>
      <figure>
        <blockquote>
            {console.log(props.carModel)}
          <p>{props.carMake}</p>
        </blockquote>
        <figcaption>{props.carModel}</figcaption>
      </figure>
      {/* to = {`/quotes/${props.id}`} */}
      <Link className={classes.btn}  >
        View Fullscreen
      </Link> 
    </li>
    );
}

export default CarFound;
