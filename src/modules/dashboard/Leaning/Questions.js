import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Input, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Questions({ id, name, hint }) {
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
  const token = localStorage.getItem("accessToken");
  const [result, setResults] = useState();
  const [answer, setAnswer] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendAns = async (e) => {
    e.preventDefault();
    const bodyParameters = { id, answer };

    console.log(bodyParameters);
    await axios
      .post("/api/v1/questions/CheckAns", bodyParameters, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setResults(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.status.question);
        console.log(error.response.data.error);
      });
  };
  useEffect(() => {}, []);

  return (
    <Grid container>
      <Grid item container xl={12}>
        <Grid item xl={10}>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={sendAns}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Questions
            </Typography>
            <Typography variant="subtitle1">{name}</Typography>

            <TextField
              id="standard-basic"
              label="Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <Grid item container xl={2} className={classes.btnAns}>
              <Button variant="outlined" onClick={handleClickOpen}>
                Hint
              </Button>{" "}
            </Grid>

            <div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"HINT"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {hint}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onSubmit={sendAns}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
