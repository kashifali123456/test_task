import React from "react";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
const RecentCollection = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.crudecollection}>
            Recent Curated Collections
          </Typography>
          <Typography variant="body1">
            Hand selected and exclusively dropped on Nifty Gateway
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  crudecollection: {
    fontSize: "2.0833rem",
  },
}));

export default RecentCollection;
