import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, TextField } from "@material-ui/core";
import axios from "axios";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
export default function GanaralSetting({ id, name, desc, tasks }) {
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
  console.log(tasks);

  return (
    <div className={classes.formCrate}>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            variant="outlined"
            id="title"
            label="Title"
            value={name}
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            id="description"
            label="Description"
            value={desc}
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
