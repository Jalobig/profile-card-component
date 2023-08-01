import React from "react";
import classes from "./Card.module.scss";
import BGCard from "../../images/bg-pattern-card.svg";
import AvatarImg from "../../images/image-victor.jpg";

const Card = () => {
  return (
    <div className={classes.card}>
      <img
        src={BGCard}
        alt="Background for the card"
        className={classes.card__bg}
      />
      <img
        src={AvatarImg}
        alt="Profile Avatar"
        className={classes.card__avatar}
      />
      <h3 className={classes.card__heading}>
        Victor Crest <span>26</span>
      </h3>
      <p className={classes.card__subtitle}>London</p>
      <hr />
      <div className={classes.card__row}>
        <div className={classes.card__group}>
          <h3 className={classes.card__heading}>80K</h3>
          <p className={classes.card__subheading}>Followers</p>
        </div>
        <div className={classes.card__group}>
          <h3 className={classes.card__heading}>803K</h3>
          <p className={classes.card__subheading}>Likes</p>
        </div>
        <div className={classes.card__group}>
          <h3 className={classes.card__heading}>1.4K</h3>
          <p className={classes.card__subheading}>Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
