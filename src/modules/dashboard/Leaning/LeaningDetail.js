import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Task from "./Task";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


export default function LeaningDetail() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titlepage: {
      padding: theme.spacing(3, 2),
      color: "#fff",
      background: "#000",
    },
    video: {
      maxHeight: "600px",
      display: "block",
      background: "#000",
      height: "600px",
    },
    progress: {
      colorPrimary: {
        backgroundColor:
          theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
      },
      bar: {
        borderRadius: 5,
        backgroundColor: "#1a90ff",
      },
    },
    secAtk: { textAlign: "right" },
    txtHead: {
      padding: "2.5em 0",
      alignItems: "center",
    },
  }));
  const classes = useStyles();

  
  const location = useLocation();
const token = localStorage.getItem("accessToken");
const { id } = location.state;
const [tasks, setTasks] = useState([]);

const [name, setName] = useState("");
const [desc, setDesc] = useState("");
const [isDelete, setDelete] = useState(false);

useEffect(() => {
  const getTask = async () => {
    const { data } = await axios.get(`/api/v1/courses/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setTasks(data.course.tasks);
    console.log(JSON.stringify(data.course.tasks));
  };

  getTask();
}, [isDelete]);

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
    },
  }))(LinearProgress);
  // const itemTask = [
  //   {
  //     no: "Task 1",
  //     titleTask: "Methodology",
  //     desc: "Learn how the web works",
  //   },
  //   {
  //     no: "Task 2",
  //     titleTask: "Section 2: Running Commands - Basic Command Execution",

  //     desc: "Learn about and exploit each of the OWASP Top 10 vulnerabilities; the 10 most critical web security risks.",
  //   },
  //   {
  //     no: "Task 3",
  //     titleTask: "Methodology",

  //     desc: "Learn how the web works",
  //   },
  //   {
  //     no: "Task 4",
  //     titleTask: "Methodology",

  //     desc: "Learn about and exploit each of the OWASP Top 10 vulnerabilities; the 10 most critical web security risks. the 10 most critical web security risks.",
  //   },
  // ];
  const taskList =  (tasks || []).map((data,id) => (
            
    <Task key={id} no={id+1} {...data} />
   
  ));

  return (
    <div className={classes.root}>
      <div className={classes.titlepage}>
        Back to all modules
        <Typography variant="h6"></Typography>
        <Typography variant="h4">Networking Fundamentals</Typography>
        <Typography variant="h6">
          Understand the core security issues with web applications, and learn
          how to exploit them using industry tools and techniques
        </Typography>
      </div>
      <Grid container>
        <Grid container item className={classes.txtHead}>
          <Grid item xl={6}>
            <Typography variant="h5">
              Learn the Linux Fundamentals Part 1
            </Typography>
          </Grid>
          <Grid className={classes.secAtk} item xl={6}>
           
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          <Grid item xl={12}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xl={12}>
            { taskList}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
