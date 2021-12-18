import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./UserSummary.module.css";
import UserSummary_img from "./UserSummary_img";
function UserSummary() {
  return (
    <div>
      <UserSummary_img />
      <Card className={classes.meals}>
        <h1>Hassle free rides , provided to you</h1>
        <p>Choose your required ride</p>
        <p>All our riders are geared with latest equipment and education.</p>
      </Card>
    </div>
  );
}

export default UserSummary;
