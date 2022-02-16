import React, { useState, useEffect } from "react";import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Link from "@material-ui/core/Link";
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
  },
}));

export default function Login() {
  const token = localStorage.getItem("accessToken");
const [course, setCourse] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    const getCourse = async () => {
      const { data } = await axios.get("/api/v1/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data);

      setCourse(data.courses);
      


     
  
    
    };
    getCourse();
    
  },[]);

  const courselist = (course || []).map((item, i) => (
      <Mymodule key={i} {...item} />

  ));

  return (
    <div className={classes.root}>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        
        <Link
          color="inherit"
          noWrap
          variant="h6"
          className={classes.toolbarLink}
        >
          All Course
        </Link>
        <Link
          color="inherit"
          noWrap
          variant="h6"
          className={classes.toolbarLink}
        >
         Profile
        </Link>
      </Toolbar>

      <Grid container className={classes.dashboard}>
       
        <Grid item xs={12} >
          <Typography variant="h6" gutterBottom>
            My Course
          {courselist}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
