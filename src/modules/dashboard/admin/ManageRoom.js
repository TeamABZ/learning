import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ListRoom from "./ListRoom";
import axios from "axios";
import jwt_decode from "jwt-decode";

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

  const [course, setCourse] = useState([]);
  const token = localStorage.getItem("accessToken");
  var decoded = jwt_decode(token);
  console.log(decoded);
  const { exp } = jwt_decode(token);
  const expirationTime = exp * 1000 - 60000;
  console.log(expirationTime);
  console.log(Date.now());
  const [isDeletes, setDeletes] = useState(false);

  useEffect(() => {
    const getCourse = async () => {
      const { data } = await axios.get("/api/v1/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourse(data.courses);
      console.log(data);
    };

    getCourse();
  }, [isDeletes]);

  const listRooms = course.map((item, i) => (
    <ListRoom
      key={i}
      {...item}
      isDeletes={isDeletes}
      setDeletes={setDeletes}
    ></ListRoom>
  ));

  return (
    <div className={classes.root}>
      <Grid container className={classes.btnCreate}>
        <Button size="medium" variant="outlined" href="/createroom">
          Create Room
        </Button>
      </Grid>
      <Grid container className={classes.room}>
        <Grid item xl={6}>
          {listRooms}
        </Grid>
      </Grid>
    </div>
  );
}
