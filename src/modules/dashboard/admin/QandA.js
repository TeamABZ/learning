import { Grid, Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

export default function QandA() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
  }));
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xl={10}>
        <form noValidate autoComplete="off">
          <TextField
            className={classes.txtFildQandA}
            label="Questions #1"
            variant="outlined"
          />

          <TextField
            className={classes.txtFildQandA}
            label="Answers #1"
            variant="outlined"
          />
        </form>
      </Grid>

      <Grid item xl={2}>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}
