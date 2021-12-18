import classes from './VehicleItem.module.css';

const VehicleItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.carName}</span>
          <span className={classes.amount}>x {props.carModel}</span>
        </div>
      </div>
      <div className={classes.actions}>
        {/* <button onClick={props.onRemove}>−</button> */}
        {/* <button onClick={props.onAdd}>+</button> */}
      </div>
    </li>
  );
};

export default VehicleItem;
