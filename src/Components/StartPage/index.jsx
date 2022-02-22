import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, alpha } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const StartPage = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-arround" spacing={-10}>
      <Grid item container xs={6} justifyContent="flex-end">
        <Typography variant="h1" className={classes.startheader}>
          Marketplace
        </Typography>
        <div className={classes.search}>
          <InputBase
            placeholder="Search Artist or Collection"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{
              "aria-label": "search ",
            }}
          />
          <div className={classes.searchIcon}>
            <ArrowDropDownIcon />
          </div>
        </div>
      </Grid>
      <Grid item container xs={12}></Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  startheader: {
    fontSize: "3.5417rem",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "#192c30",
    marginTop: 40,
  },

  search: {
    marginTop: 55,
    height: 50,
    borderRadius: theme.shape.borderRadius,
    cursor: "text",
    borderRadius: "10px",
    border: "1px solid rgb(229, 232, 235)",
    width: "50%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    height: "55%",
    pointerEvents: "none",
    alignItems: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));
export default StartPage;
