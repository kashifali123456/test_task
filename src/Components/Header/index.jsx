import { Grid, Button } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useMediaQuery } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.PNG";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Drawers from "../Drawers";
import clsx from "clsx";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const hanleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleClick = () => {
    setOpen1((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen1(false);
  };
  const match = useMediaQuery("(max-width: 960px)");
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.header}
    >
      <Grid
        item
        container
        xs={2}
        md={2}
        justifyContent="center"
        alignItems="center"
        className={classes.headerlogo}
      >
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Grid>

      <Grid
        item
        container
        xs={3}
        md={12}
        lg={8}
        justifyContent="flex-start"
        className={classes.headerdrawer}
      >
        {match ? (
          <IconButton
            color="inherit"
            aria-label="opendrawer"
            onClick={hanleDrawerOpen}
            edge="start"
            style={{ color: "white" }}
          >
            <Menu />
          </IconButton>
        ) : (
          <>
            <Grid
              item
              container
              justifyContent="space-evenly"
              alignItems="center"
              xs={6}
              md={9}
            >
              <Link to="curateddrops" className={classes.link}>
                {" "}
                Curated Drops
              </Link>
              <Link to="varifieddrops" className={classes.link}>
                {" "}
                Verified Drops
              </Link>
              <Link to="/" className={classes.link}>
                {" "}
                Marketplace
              </Link>
              <Link to="/Activity" className={classes.link}>
                {" "}
                Activity
              </Link>
              <Link to="/" className={classes.link}>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <div className={classes.root}>
                    <div
                      type="button"
                      className={classes.link}
                      onClick={handleClick}
                      style={{ background: "#192c30" }}
                    >
                      Company <KeyboardArrowDownIcon />
                    </div>
                    {open1 ? (
                      <div className={classes.dropdown}>
                        <h6> What is an NFTs?</h6>
                        <h6> What is an NFTs?</h6>
                        <h6> What is an NFTs?</h6>
                      </div>
                    ) : null}
                  </div>
                </ClickAwayListener>
              </Link>
              <SearchIcon />
            </Grid>
            <Grid item container xs={3} justifyContent="space-evenly">
              <Link to="/" className={classes.link}>
                <Button
                  varient="outlined"
                  color="default"
                  className={classes.loginbtn}
                >
                  Log In
                </Button>
              </Link>
              <Link to="/" className={classes.link}>
                <Button varient="container" className={classes.signupbtn}>
                  Sign Up
                </Button>
              </Link>
            </Grid>
          </>
        )}
        <Grid className="Menu-button">
          <Drawers open={open} handleDrawerClose={handleDrawerClose} />
        </Grid>
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "auto",
    color: "rgb(219 210 210)",
    backgroundColor: "#192c30",
    padding: "20px",
  },
  headerdrawer: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  loginbtn: {
    color: "#fff",
    borderRadius: "30px",
    border: "1px solid rgb(219 210 210)",
    textTransform: "capitalize",
    width: 90,
    height: 36,
  },
  signupbtn: {
    color: "#192c30",
    backgroundColor: "#fff",
    borderRadius: "30px",
    textTransform: "capitalize",
    width: 100,
    height: 36,
  },
  link: {
    textDecoration: "none",
    fontSize: "16",
    fontWeight: 600,
    color: "rgb(219 210 210)",
    textAlign: "center",
    "&:active": {
      color: "#fff",
    },
  },
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    padding: "15px",
    backgroundColor: "#192c30",
    border: "transparent",
    width: 130,
  },
}));
export default Header;
