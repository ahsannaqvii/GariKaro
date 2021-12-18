import classes from "./RideDetails.module.css";
import RidesForm from "../RidesForm/RidesForm";
function MealItem(props) {

  return (
    <li className={classes.meal}>
      <div>
        {" "}
        <h3>{`Mr. ${props.name}`}</h3>
        <div className={classes.description}>{props.carRegNumb}</div>
        <div className={classes.description}>{`Remaining Seats: ${props.Seats}`}</div>
        <div className={classes.price}>{props.pickUp}</div>
        <div className={classes.price}>{props.dest}</div>
      </div>
      <div>
        <RidesForm vehicleType={props.vehicleType} Seats={props.Seats} riderID={props.riderID} id={props.id} setSeats={props.setSeats}/>
      </div>
    </li>
  );
}

export default MealItem;
