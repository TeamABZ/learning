
import { Grid, Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
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

  const token = localStorage.getItem("accessToken");
  const location = useLocation();
  const { id } = location.state;
  const [data, setData] = useState();
  const [taskId, setTaskId] = useState(id);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const createQandA = async (e) => {
    e.preventDefault();
    console.log(token);
    console.log(id);

    setTaskId(id);

    const bodyParameters = {  };
    console.log(bodyParameters);
    await axios
      .post("/api/v1/tasks", bodyParameters, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setData(response.data.task);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.status); // 401
        console.log(error.response.data.error);
      });
  };

  return (
    <Grid container>
      <Grid item xl={9} className={classes.all}>
        <form noValidate autoComplete="off"                   
        onSubmit={createQandA}
>
          <TextField
            className={classes.txtFildQandA}
            label="Question"
            variant="outlined"
            id="question"
            onChange={(e) => setQuestion(e.target.value)}

          />

          <TextField
            className={classes.txtFildQandA}
            label="Answer"
            variant="outlined"
            id="answer"

            onChange={(e) => setAnswer(e.target.value)}

          />
        </form>
      </Grid>

      <Grid item xl={3}>
        <Button variant="contained"
                color="primary"
             
                onSubmit={createQandA}

                className={classes.savebtn}>
          save
        </Button>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}
