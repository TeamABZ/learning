import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Input, TextField } from "@material-ui/core";

export default function Questions() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "50em",
      },
    },
    btnAns: {
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  }));
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item container xl={12}>
        <Grid item xl={10}>
          <Typography variant="h5" component="h2" gutterBottom>
            Questions
          </Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            aspernatur a sunt pariatur culpa. Autem iure ipsa magni velit
            consequatur accusamus sit nihil harum, aperiam, maxime quos, numquam
            unde quasi?
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Answer" />
          </form>
        </Grid>
        <Grid item container xl={2} className={classes.btnAns}>
          <Button variant="outlined">Hint</Button>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
