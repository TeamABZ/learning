import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ListRoom from "./ListRoom";

export default function ManageRoom() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    btnCreate: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: "1em",
    },
    room: {
      justifyContent: "center",
      padding: "2em",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.btnCreate}>
        <Button size="medium" variant="outlined" href="/createroom">
          Create Room
        </Button>
      </Grid>
      <Grid container className={classes.room}>
        <Grid item xl={6}>
          <Link color="inherit" noWrap variant="h6" href="/updateroom">
            <ListRoom></ListRoom>
          </Link>
          <ListRoom></ListRoom>
          <ListRoom></ListRoom>
        </Grid>
      </Grid>
    </div>
  );
}
