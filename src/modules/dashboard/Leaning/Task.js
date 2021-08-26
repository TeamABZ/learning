import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Questions from "./Questions";
export default function Task({ no, titleTask, desc }) {
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

  return (
    <Grid container className={classes.rootTask} xl={12}>
      <Accordion className={classes.headTask}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography variant="h5">
            {no} :{titleTask}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container className={classes.contentTask}>
            <Grid item container xl={12} className={classes.question}>
              <Grid item xl={9}>
                <Typography variant="subtitle1">{desc}</Typography>
              </Grid>
              <Grid item xl={3} container className={classes.btnMachine}>
                <Button variant="contained" color="primary">
                  Start Machine
                </Button>
              </Grid>
            </Grid>
            <Grid container item>
              <Questions></Questions>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
