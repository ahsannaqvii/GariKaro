import React from "react";
import classes from "./UserSummary_img.module.css";
import mealsImg from  '../../../assets/herosecimg.jpg'

const UserSummary_img = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={mealsImg} alt="BEATUFIL FOOD" />
    </div>
  );
};

export default UserSummary_img;
