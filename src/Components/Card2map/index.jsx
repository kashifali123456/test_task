import React from "react";
import { data1 } from "../../Data";
import Card2 from "../Card2";
import { Grid, Typography, Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const Card2map = () => {
  return (
    <Grid container style={{ paddingTop: "30px" }}>
      <Grid container justifyContent="space-between">
        <Grid item container xs={12} md={6} justifyContent="center">
          <Typography variant="h3"> Browse</Typography>
          <Typography variant="subtitle1">(7480 results)</Typography>

          <Typography variant="body2"> Currency:</Typography>
          <Button varient="outlined">
            {" "}
            USD <KeyboardArrowDownIcon />
          </Button>
        </Grid>
        <Grid item container justifyContent="flex-end" xs={6}>
          <Button style={{ border: "1px solid black", borderRadius: "30px" }}>
            Short by <KeyboardArrowDownIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid item container xs={12} justifyContent="space-evenly">
        {data1.map((items) => {
          return (
            <Grid
              item
              container
              xs={12}
              md={3}
              style={{ paddingTop: "20px" }}
              justifyContent="space-evenly"
            >
              <Card2 items={items} />{" "}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Card2map;
