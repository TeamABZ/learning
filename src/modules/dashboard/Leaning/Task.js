import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Questions from "./Questions";
import axios from "axios";

import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";


export default function Task({ no, name, desc,id }) {
  const useStyles = makeStyles((theme) => ({
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
  }));
  const classes = useStyles();
  
  
const token = localStorage.getItem("accessToken");
const [question, setQuest] = useState([]);


  useEffect(() => {
    const getQuest = async () => {
      const { data } = await axios.get(`/api/v1/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      setQuest(data.task.question);
      console.log(JSON.stringify(data.task.question));
    };
  
    getQuest();
  }, []);
  const questionlist =  (question || []).map((data,id) => (
            
    <Questions key={id} {...data} />
   
  ));

  return (
    <Grid container className={classes.rootTask} xl={12}>
      <Accordion className={classes.headTask}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography variant="h5">
            {no} :{name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container className={classes.contentTask}>
            <Grid item container xl={12} className={classes.question}>
              <Grid item xl={9}>
                <Typography variant="subtitle1">{desc}</Typography>
              </Grid>
              <Grid item xl={3} container className={classes.btnMachine}></Grid>
            </Grid>
            <Grid container item>
              {questionlist}
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
