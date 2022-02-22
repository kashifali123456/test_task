import React from "react";
import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ListItem, ListItemText } from "@material-ui/core";
const DrawersButton = ({ open, handleDrawerClose, setOpen }) => {
  return (
    <>
      <Drawer
        open={open}
        anchor="right"
        backgroundColor="black"
        className="drawer"
      >
        <ListItem button onClick={handleDrawerClose}>
          <ArrowForwardIosIcon />
        </ListItem>
        <ListItem button>
          <ListItemText primary={" Curated Drops"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={" Verified Drops"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={" Marketplace"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Activity"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Company <KeyboardArrowDownIcon />"} />
        </ListItem>

        <ListItem button>
          <Button id="CtW" variant="contained" color="secondary">
            Log In
          </Button>
        </ListItem>
        <ListItem button>
          <Button id="CtW" variant="contained" color="secondary">
            Sign Up
          </Button>
        </ListItem>
      </Drawer>
    </>
  );
};

export default DrawersButton;
