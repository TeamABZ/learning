import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ListRoom from "./ListRoom";
import axios from "axios";

export default function ManageRoom() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    btnCreate: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: "1em",
    },
    room: {
      justifyContent: "center",
      padding: "2em",
    },
  }));
  const classes = useStyles();
  const [course, setCourse] = useState(null);
  const token = localStorage.getItem("accessToken");
  console.log(token);
  useEffect(() => {
    const getCourse = async () => {
      const { data } = await axios.get("/api/v1/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourse(data);
      console.log(data);
    };
    getCourse();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container className={classes.btnCreate}>
        <Button size="medium" variant="outlined" href="/createroom">
          Create Room
        </Button>
      </Grid>
      <Grid container className={classes.room}>
        <Grid item xl={6}>
          <ListRoom></ListRoom>
          <ListRoom></ListRoom>
          <ListRoom></ListRoom>
        </Grid>
      </Grid>
    </div>
  );
}
