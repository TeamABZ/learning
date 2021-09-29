import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import swal from "sweetalert";

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
  const updateQuest = async (e) => {
    e.preventDefault();
    console.log(token);

    const bodyParameters = { Qnames, Qanswer, id };
    console.log(bodyParameters);
    await axios
      .patch(
        `/api/v1/questions/${id}`,
        { name: Qnames, answer: Qanswer },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setData(response.data.task);
        // console.log(response);
        // console.log(response.data) ;
        swal("Success", "Update Success", "success", {
          buttons: false,
          timer: 1000,
        }).then((value) => {
          console.log("UPDATE");
        });
      })
      .catch((error) => {
        swal("Failed", "Error", "error");

        console.log(error.response.status); // 401
        console.log(error.response.data.error);
      });
  };
  return (
    <Grid container>
      <Grid container className={classes.all}>
        <form noValidate autoComplete="off" onSubmit={updateQuest}>
          <TextField
            className={classes.txtFildQandA}
            label="Questions"
            variant="outlined"
            value={Qnames}
            onChange={(e) => setQName(e.target.value)}
          />
          <TextField
            className={classes.txtFildQandA}
            label="Answers"
            variant="outlined"
            value={Qanswer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.savebtn}
            type="submit"
          >
            update
          </Button>
          <Button variant="contained" color="secondary">
            Delete
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
