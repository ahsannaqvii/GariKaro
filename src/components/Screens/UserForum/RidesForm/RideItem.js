import classes from './RideItem.module.css';

const RideItem = (props) => {


  return (
    <li className={classes.meal}>
      <div>
        {" "}
        <h3 className={classes.heading}>Details</h3>
        <div className={classes.price}>{`Vehicle: ${props.vehicleType}`}</div>
        <div className={classes.description}>{`Date: ${props.Date}`}</div>
        <div className={classes.price}>{`Driver ID: ${props.Driver_RollNo}`}</div>
       
        <div className={classes.description}>{`Fare per Person: ${props.Fare}`}</div>
       
      </div>
    </li>
  );
};

export default RideItem;
{/* <div className={classes.actions}>
        <button onClick={props.onRemove}>{props.Date}</button>
        <button onClick={props.onAdd}>+</button>
      </div> */}

    //   <li className={classes['cart-item']}>
    //   <div>
    //     <h2>{props.vehicleType}</h2>
    //     <div className={classes.summary}>
    //       <span className={classes.price}>{props.Driver_RollNo}</span>
    //       <span className={classes.L_Time}> {props.L_Time}</span>
    //       <div>
              
    //       </div>
    //     </div>
    //   </div>
      
    // </li>