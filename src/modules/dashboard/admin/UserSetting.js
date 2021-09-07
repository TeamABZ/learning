import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ToobarAdmin from "./ToobarAdmin";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Userlist from "./Userlist";

export default function UserSetting() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titlepage: {
      padding: theme.spacing(2, 2),
      color: "#fff",
      background: "#000",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ToobarAdmin></ToobarAdmin>

      <div className={classes.titlepage}>
        <Typography variant="h4">Setting User</Typography>
        <Typography variant="h6">update user account</Typography>
      </div>
      <Grid container>
        <Userlist></Userlist>
      </Grid>
    </div>
  );
}
