import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, TextField } from "@material-ui/core";

export default function CrateRoom() {
  const useStyles = makeStyles((theme) => ({
    titlepage: {
      padding: theme.spacing(3, 2),
      color: "#fff",
      background: "#000",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.titlepage}>
      <Typography variant="h4">Create Rooms</Typography>
      <Typography variant="h6">
        Create a room ,upload your material and assign task
      </Typography>
      <Grid container>
        <form noValidate autoComplete="off">
          <TextField id="title" label="title" />
          <TextField id="description" label="description" />

          <Button variant="contained" component="label">
            Room Icon
            <input type="file" hidden />
          </Button>
        </form>
      </Grid>
    </div>
  );
}
