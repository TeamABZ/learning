import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  itemModule: {
    textAlign: "center",
    display: "inline-block",
    border: " 1px solid #555",
    padding: "10px",
    height: 300,
    margin: "auto 1em",
  },
  media: {
    height: 130,
  },
}));
export default function ModuleItem({ id,name, desc }) {
  const classes = useStyles();
  // const { titleModule, descModule, imageModule } = dataitem;
  return (
    <Grid className={classes.itemModule}>
      <Link color="inherit" 
      
      to={{ pathname: `LeaningDetail/${id}`, state: { id } }}

      >
        <img className={classes.media} />

        {/* {imageModule} */}
        <Typography variant="h5">{name} </Typography>
    
        <Typography>{desc}</Typography>
     
      </Link>
      <Button
                        variant="contained"
                        color="primary"
                    
                      >
                        Enroll
                      </Button>
    </Grid>
  );
}
