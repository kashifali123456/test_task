import React from "react";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { data } from "../../Data";
import { makeStyles } from "@material-ui/core";
import Card1 from "../Card1";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 780, itemsToShow: 2 },
  { width: 960, itemsToShow: 3 },
];
const RecentCollection = ({ para, dec }) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justifyContent="flex-start"
        className={classes.RecentCollection}
      >
        <Grid item container xs={12} md={6} justifyContent="center">
          <Typography variant="h2" className={classes.crudecollection}>
            {dec}
          </Typography>
          <Grid item container xs={12} md={8} justifyContent="center">
            <Typography variant="body1" className={classes.crudepara}>
              {para}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-evenly" xs={12}>
          <Carousel breakPoints={breakPoints}>
            {data.map((menuItem) => {
              return (
                <Grid item container xs={4}>
                  <Card1 menuItem={menuItem} />
                </Grid>
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  crudecollection: {
    fontSize: "2.0833rem",
    color: "#192c30",
    fontWeight: 700,
    lineHeight: 1.2,
  },
  crudepara: {
    width: "80%",
    fontSize: 16,
    color: "#586a6d",
    fontWeight: 400,
    lineHeight: 1.5,
    textDecoration: "none",
    paddingBottom: "10px",
  },
  RecentCollection: {},
}));

export default RecentCollection;
