import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ToobarAdmin from "./ToobarAdmin";
import LeftBar from "./LeftBar";
import TaskDetail from "./TaskDetail";
import TaskList from "./TaskList";

import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useLocation } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function TaskSetting() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titlepage: {
      padding: theme.spacing(2, 2),
      color: "#fff",
      background: "#000",
    },
    updateRoom: {
      padding: "2em 0",
    },
    leftBar: {},
    rightBar: {},
    rootTask: {
      margin: "1rem 0",
    },
    headTask: {
      width: "100%",
    },
    contentTask: {
      border: "1px solid #2f2f2f",
      padding: "2rem",
    },
    btnMachine: {
      justifyContent: "center",
      alignItems: "center",
    },
    question: {
      borderBottom: "1px solid #121212",
      paddingBottom: "2em",
      marginBottom: "2em",
    },
    addbtn: {
      textAlign: "right",
    },
  }));
  const classes = useStyles();
  const location = useLocation();
  const token = localStorage.getItem("accessToken");
  const { id } = location.state;

  const [tasks, setTasks] = useState([]);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getTask = async () => {
      const { data } = await axios.get("/api/v1/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(data.tasks);
      console.log(data.tasks);
    };

    getTask();
  }, []);
  const taskList = tasks.map((item, i) => (
    <TaskList key={i} {...item} no={i + 1}></TaskList>
  ));

  const [fields, setFields] = useState([]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    console.log(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const AddTask = fields.map((idx) => {
    if (fields.length > 0) return <TaskDetail></TaskDetail>;
    return <div></div>;
  });

  return (
    <div className={classes.root}>
      <ToobarAdmin></ToobarAdmin>

      <div className={classes.titlepage}>
        <Typography variant="h4">Update Room</Typography>
        <Typography variant="h6">Update Room and Setting</Typography>
      </div>
      <Grid container className={classes.updateRoom}>
        <Grid container item xl={2}>
          <Grid container className={classes.updateRoom}>
            <Grid container item xl={3}>
              <List dense>
                <ListItem button>
                  <Link
                    color="inherit"
                    to={{ pathname: `/updateroom/${id}`, state: { id } }}
                  >
                    Setting
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link
                    color="inherit"
                    to={{ pathname: `/tasksetting/${id}`, state: { id } }}
                  >
                    Task
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xl={10}>
          <Grid container item>
            <Grid item xl={6}>
              <Typography variant="h5" color="initial">
                Task setting
              </Typography>
            </Grid>
            <Grid item xl={6} className={classes.addbtn}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAdd()}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>

          <Grid container item>
            {taskList}
            {AddTask}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
