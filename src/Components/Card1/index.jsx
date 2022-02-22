import React from "react";
import { makeStyles } from "@material-ui/core";
const Card1 = (props) => {
  const classes = useStyles();
  const { img1, title } = props.menuItem;
  return (
    <div>
      <div className={classes.outer}>
        <div className={classes.left}>
          <img src={img1} alt=" " className={classes.card_img} />
        </div>
        <div className={classes.right}>
          <p className={classes.card_para}>{title}</p>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  outer: {
    width: "320px",
    display: "flex",
    background: "#5c4f4f",
    border: "none",
    borderRadius: "5px",
  },
  card_img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  left: {
    width: "40%",
  },
  right: {
    width: "60%",
    display: "flex",
    alignItems: "center",
    padding: "5px 5px",
  },
  card_para: {
    color: "white",
    fontSize: "1.0420rem",
  },
}));
export default Card1;
