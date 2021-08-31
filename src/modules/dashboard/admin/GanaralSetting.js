import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, TextField } from "@material-ui/core";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
export default function GanaralSetting() {
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
      padding: "2em 0",
    },
  }));
  const classes = useStyles();
  return (
    <div>
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
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
