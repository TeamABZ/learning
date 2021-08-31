import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, TextField } from "@material-ui/core";
import ToobarAdmin from "./ToobarAdmin";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default function CrateRoom() {
  const useStyles = makeStyles((theme) => ({
    titlepage: {
      padding: theme.spacing(3, 2),
      color: "#fff",
      background: "#000",
    },
    input: {
      display: "none",
    },
    formCrate: {
      justifyContent: "center",
      textAlign: "center",
      "& div": {
        padding: theme.spacing(1),
      },
    },
    textField: {
      width: "30em",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <ToobarAdmin></ToobarAdmin>
      <div className={classes.titlepage}>
        <Typography variant="h4">Create Rooms</Typography>
        <Typography variant="h6">
          Create a room ,upload your material and assign task
        </Typography>
      </div>

      <Grid container className={classes.formCrate}>
        <form noValidate autoComplete="off">
          <div>
            <TextField id="title" label="Title" className={classes.textField} />
          </div>
          <div>
            <TextField
              id="description"
              label="Description"
              className={classes.textField}
            />
          </div>
          <div>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Upload image
              </Button>
            </label>
          </div>
          <div>
            <Button variant="contained" color="secondary">
              Create Room
            </Button>
          </div>
        </form>
      </Grid>
    </div>
  );
}
