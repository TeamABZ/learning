import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, TextField } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import QandA from "./QandA";
export default function TaskDetail({ id, title, desc }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    txtFilds: {
      margin: theme.spacing(1),
      width: "70em",
    },
    txtFildQandA: {
      paddingRight: "3em",
      width: "20em",
    },
    groupQandA: {
      padding: "2em 0",
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
  return (
    <Grid container className={classes.rootTask} xl={12}>
      <Accordion className={classes.headTask}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography variant="h5">Task</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container className={classes.contentTask}>
            <Grid item container xl={12} className={classes.question}>
              <Grid item xl={12}>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    <TextField
                      className={classes.txtFilds}
                      id="title"
                      label="Title"
                      variant="outlined"
                    />
                  </div>
                  <div>
                    <TextField
                      className={classes.txtFilds}
                      id="description"
                      label="Description"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </div>
                </form>
                <Grid container>
                  <Grid container className={classes.groupQandA}>
                    <Grid item xl={6}>
                      <Typography variant="subtitle1" color="initial">
                        Questions, Answers and Hints
                      </Typography>
                    </Grid>
                    <Grid item xl={6} className={classes.addbtn}>
                      <Button variant="contained" color="primary">
                        Add Questions
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xl={12}>
                    <QandA></QandA>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item></Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
