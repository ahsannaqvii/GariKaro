import React from "react";
import classes from "./CarFound.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button";

const CarFound = (props) => {
  return (
    <div>
      <div className={classes.top}>
        <button>CAR ALREADY EXISTS</button>
      </div>
      <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{props.carMake}</p>
          </blockquote>
          <div className={classes.fig}>
            <figcaption className={classes.figS}>{props.carModel}</figcaption>
            <figcaption>{props.carName}</figcaption>
          </div>
        </figure>

        <Link className={classes.btn} onClick={props.carNeg} to={`/car-details/${props.carID}` }>
          Edit Details
        </Link>
        <Button className={classes.btn} onClick={props.onClick} type="button">
           Ride
        </Button>
      </li>
    </div>
  );
};

export default CarFound;
