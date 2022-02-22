import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import profile1 from "../../Assets/Images/Ellipse 9.png";
// import WrappperMargin from "../WrappperMargin";
// import one from "../../Assets/Images/Rectangle 9.png";
const Card2 = (props) => {
  const { image } = props.items;
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.CardOneContainer}
        width="292.03px"
        height={395.77}
        borderColor="grey"
        border={1}
        borderRadius="15px"
        bgcolor="white"
      >
        <Box p={2}>
          <Box>
            <img src={image} alt="pic" className={classes.cardimage} />
          </Box>
          <Box display="flex" justifyContent="space-between" pt={2}>
            <Typography className={classes.cardOnetitl}>Micaha</Typography>
            <Box display="flex" flexDirection="row">
              <FavoriteBorderIcon className={classes.heartIcon} />
            </Box>
          </Box>
          <Typography className={classes.cardOne3D}>
            Aku Chapter X: The Finale
          </Typography>
          <Box display="flex" pt={2}>
            <Typography className={classes.cardOneeditn}>
              1200 Editions
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pt={2}
          >
            <Typography className={classes.cardOnefloor}>
              $1,295.00 Floor price
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Card2;
const useStyles = makeStyles((theme) => ({
  roundCardContainer: {},
  cardOnefloor: {
    fontFamily:
      "    font-family: MessinaSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    color: "gray",
  },
  cardOneeditn: {
    fontFamily:
      "MessinaSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.2,
    color: "#586A6D",
  },
  cardOne3D: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: "19.5px",
    color: "#586A6D",
    paddingTop: "10px",
  },
  cardOnetitle: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: 700,
    lineHeight: "19.5px",
    color: "#173C56",
    paddingLeft: "10px",
  },
  cardimage: {
    borderRadius: "17px",
    width: "254.51px",
    Height: "72.62px",
  },
  cardOnetitl: {
    color: "#586A6D",
  },
  heartIcon: {
    color: "#586A6D",
  },
}));
