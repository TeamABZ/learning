import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
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
  const [quests, setQuests] = useState([]);
  const [courseId, setCourseId] = useState(id);

  const [Qfield, setFields] = useState([]);
  const [data, setData] = useState();
  console.log(id);
  //   const createTask = async (e) => {
  //     e.preventDefault();
  //     console.log(token);
  //     console.log(id);

  //     setCourseId(id);

  //     const bodyParameters = { name, desc, objective, courseId };
  //     console.log(bodyParameters);
  //     await axios
  //       .post("/api/v1/tasks", bodyParameters, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((response) => {
  //         setData(response.data.task);
  //         // console.log(response);
  //         // console.log(response.data);

  //         // console.log(response.data.task);

  //         // localStorage.setItem("user", JSON.stringify(response["user"]));
  //         // window.location.href = "/adminprofile";
  //       })
  //       .catch((error) => {
  //         console.log(error.response.status); // 401
  //         console.log(error.response.data.error);
  //       });
  //   };
  return (
    <Grid container>
      <Grid item xl={9} className={classes.all}>
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
