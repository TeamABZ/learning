import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Links from "@material-ui/core/Link";
import Header from "../Header";
import Mymodule from "./MyModule";
import NewMudule from "./NewModule";
import axios from "axios";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarSecondary: {
    background: "#000",
    color: "#fff",
    padding: theme.spacing(3, 2),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  toolbar: { borderBottom: `1px solid ${theme.palette.divider}` },
  dashboard: {
    padding: theme.spacing(3, 2),
  }, btnSetting: {
      textAlign: "center",
    },
}));

export default function UserPofile() {
  const token = localStorage.getItem("accessToken");

  const classes = useStyles();
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);

    return initialValue || "";
  });
  const userId = user.id;

  const [mycourse, setCourse] = useState([]);



  const getCourse = async () => {
    const { data } = await axios.get(`/api/v1/progresses/mycourse/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setCourse(data.progresses.course);
    // console.log(data.progresses.course);
  };
  useEffect(() => {
    getCourse();
  }, []);
console.log(mycourse);
  const courselist = (mycourse || []).map((item, i) => {
    return <Mymodule key={i} {...item} />;
  });

  return (
    <div className={classes.root}>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Links
          color="inherit"
          noWrap
          variant="h6"
          className={classes.toolbarLink}
          href="/allmodule"

        >
          All Course
        </Links>
        <Links
          color="inherit"
          noWrap
          variant="h6"
          className={classes.toolbarLink}
          href="/userprofile"
        >
          My Course

        </Links>
        <Links
          color="inherit"
          noWrap
          variant="h6"
          className={classes.toolbarLink}
          href="/settingprofile"
        >
         Setting
        </Links>
      </Toolbar>

      <Grid container className={classes.dashboard}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            My Course
            {courselist}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
