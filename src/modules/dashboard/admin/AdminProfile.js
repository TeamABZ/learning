import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ManageRoom from "./ManageRoom";

export default function AdminProfile() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titlepage: {
      padding: theme.spacing(3, 2),
      color: "#fff",
      background: "#000",
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
        <Link
          color="inherit"
          noWrap
          variant="h6"
          className={classes.toolbarLink}
        >
          Develop
        </Link>
        <Link
          color="inherit"
          noWrap
          variant="h6"
          className={classes.toolbarLink}
        >
          User
        </Link>
      </Toolbar>

      <div className={classes.titlepage}>
        <Typography variant="h4">Manage Rooms</Typography>
        <Typography variant="h6">
          Create a room ,upload your material and assign task
        </Typography>
      </div>
      <Grid container>
        <ManageRoom></ManageRoom>
      </Grid>
    </div>
  );
}
