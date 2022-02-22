import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, alpha, useTheme } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RecentCollection from "../RecentCollection";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const StartPage = ({ dec, para }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-arround" spacing={-10}>
      <Grid
        item
        container
        xs={12}
        md={7}
        justifyContent="flex-end"
        className={classes.heading1}
      >
        <Typography variant="h1" className={classes.startheader}>
          Marketplace
        </Typography>
        <FormControl className={classes.formControl}>
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
            {/* <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select> */}
          </div>
        </FormControl>
      </Grid>
      <Grid item container xs={12}>
        <RecentCollection
          dec={"Recent Curated Collections"}
          para={"Hand selected and exclusively dropped on Nifty Gateway"}
        />
        <RecentCollection
          dec={"Recent Verified Collections"}
          para={
            "External listings that have been verified as legitimate and authentic by Nifty Gateway"
          }
        />
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  heading1: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    marginBottom: "20px",
  },
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 395,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
export default StartPage;
