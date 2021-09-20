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
import axios from "axios";
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
  const [course, setCourse] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const getCourse = async () => {
      const { data } = await axios.get("/api/v1/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourse(data.courses);
    };
    getCourse();
  }, [course]);

  const listRooms = course.map((item, i) => (
    <TaskDetail key={i} {...item}></TaskDetail>
  ));
  return (
    <div className={classes.root}>
      <ToobarAdmin></ToobarAdmin>

      <div className={classes.titlepage}>
        <Typography variant="h4">Update Room</Typography>
        <Typography variant="h6">Update Room and Setting</Typography>
      </div>
      <Grid container className={classes.updateRoom}>
        <Grid container item xl={2}>
          <LeftBar></LeftBar>
        </Grid>
        <Grid container item xl={10}>
          <Grid container item>
            <Grid item xl={6}>
              <Typography variant="h5" color="initial">
                Task setting
              </Typography>
            </Grid>
            <Grid item xl={6} className={classes.addbtn}>
              <Button variant="contained" color="primary">
                Add Task
              </Button>
            </Grid>
          </Grid>

          <Grid container item>
            <TaskDetail></TaskDetail>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
