import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
export default function ListQuestion({ id, name, answer, Status }) {
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
  const token = localStorage.getItem("accessToken");
  const [quests, setQuest] = useState([]);

  const [Qnames, setQName] = useState(name);
  const [Qanswer, setAnswer] = useState(answer);

  const [Qfield, setQFields] = useState([]);
  const [data, setData] = useState();

  return (
    <Grid container>
      <Grid item xl={9} className={classes.all}>
        <form noValidate autoComplete="off">
          <TextField
            className={classes.txtFildQandA}
            label="Questions #1"
            variant="outlined"
            value={Qnames}
            onChange={(e) => setQName(e.target.value)}
          />

          <TextField
            className={classes.txtFildQandA}
            label="Answers #1"
            variant="outlined"
            value={Qanswer}
            onChange={(e) => setAnswer(e.target.value)}
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
