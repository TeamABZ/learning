import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flex: 1,
  },
  btnheader: {
    backgroundColor: "#66FCF1",

    marginLeft: theme.spacing(1),
  },
  toolbars: {
    backgroundColor: "#141414",
    color: "#fff",
    padding: theme.spacing(0, 2),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbars}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>

        <Button
          size="medium"
          variant="outlined"
          className={classes.btnheader}
          href="/singup"
        >
          Sign up
        </Button>
        <Button
          size="medium"
          variant="outlined"
          className={classes.btnheader}
          href="/login"
        >
          Login
        </Button>
        <Button
          size="medium"
          variant="outlined"
          className={classes.btnheader}
          href="/userprofile"
        >
          User Profile
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}
