import { Grid, Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

export default function QandA() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    all: {
      paddingBottom: "1em",
    },
    txtFildQandA: {
      paddingRight: "3em",
      width: "25em",
    },
    groupQandA: {
      padding: "2em 0",
    },
    addbtn: {
      textAlign: "right",
    },
    savebtn: {
      marginRight: "0.5em",
    },
  }));
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xl={9} className={classes.all}>
        <form noValidate autoComplete="off">
          <TextField
            className={classes.txtFildQandA}
            label="Questions"
            variant="outlined"
          />

          <TextField
            className={classes.txtFildQandA}
            label="Answers"
            variant="outlined"
          />
        </form>
      </Grid>

      <Grid item xl={3}>
        <Button variant="contained" color="primary" className={classes.savebtn}>
          save
        </Button>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}
