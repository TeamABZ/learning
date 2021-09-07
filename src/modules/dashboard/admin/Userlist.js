import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function Userlist() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    allRoom: {
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #c1c1c1",
      borderRadius: "25px",
      margin: "1em 0",
      padding: "2em 0",
    },
    userList: {
      paddingRight: "2em",
    },
  }));
  const classes = useStyles();
  return (
    <Grid container className={classes.allRoom}>
      <Link
        color="inherit"
        noWrap
        variant="h6"
        href="/updateuser"
        className={classes.userList}
      >
        <Typography variant="subtitle1" color="initial">
          User Name
        </Typography>
      </Link>

      <Button variant="contained" color="secondary">
        Delete
      </Button>
    </Grid>
  );
}
