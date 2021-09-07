import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ToobarAdmin from "./ToobarAdmin";
import GanaralSetting from "./GanaralSetting";
import LeftBar from "./LeftBar";

export default function UpdateRoom() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titlepage: {
      padding: theme.spacing(2, 2),
      color: "#fff",
      background: "#000",
    },
    updateRoom: {
      padding: "2em 0",
    },
    leftBar: {},
    rightBar: {},
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ToobarAdmin></ToobarAdmin>

      <div className={classes.titlepage}>
        <Typography variant="h4">Update Room</Typography>
        <Typography variant="h6">Update Room and Setting</Typography>
      </div>
      <Grid container className={classes.updateRoom}>
        <Grid container item xl={3}>
          <LeftBar></LeftBar>
        </Grid>
        <Grid container item xl={9}>
          <Typography variant="h5" color="initial">
            Ganaral setting
          </Typography>
          <Grid container>
            <GanaralSetting></GanaralSetting>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
