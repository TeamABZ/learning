import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Link from "@material-ui/core/Link";
import Header from "../Header";
import Mymodule from "./MyModule";
import NewMudule from "./NewModule";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarSecondary: {
    background: "#000",
    color: "#fff",
    padding: theme.spacing(3, 2),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  toolbar: { borderBottom: `1px solid ${theme.palette.divider}` },
  dashboard: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Link
          color="inherit"
          noWrap
          variant="h6"
          className={classes.toolbarLink}
        >
          Dashboard
        </Link>
        <Link
          color="inherit"
          noWrap
          variant="h6"
          className={classes.toolbarLink}
        >
          Lean
        </Link>
      </Toolbar>

      <Grid container className={classes.dashboard}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h6" gutterBottom>
            News module
            <NewMudule></NewMudule>
          </Typography>
          <Typography variant="h6" gutterBottom>
            <Link
              color="inherit"
              noWrap
              variant="h6"
              className={classes.toolbarLink}
              href="/allmodule"
            >
              All Learn modules >>
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h6" gutterBottom>
            My module
            <Mymodule></Mymodule>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
