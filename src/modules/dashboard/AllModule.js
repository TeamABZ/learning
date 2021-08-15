import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ModuleItem from "./ModuleItem";
import network from "assets/images/network.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    display: "inline-block",
  },
  allitem: {
    flexWrap: "wrap",
    paddingBottom: 20,
  },
  titlepage: {
    padding: theme.spacing(3, 2),
  },
  toolbarSecondary: {
    background: "#000",
    color: "#fff",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function MyModule() {
  const classes = useStyles();
  const moduleItems = [
    {
      titleModule: "Cyber security training",
      descModule:
        "Making it easier to break into security, all through your browser.",
      imageModule: network,
    },
    {
      titleModule: "Cyber security training",
      descModule:
        "Making it easier to break into security, all through your browser.",
      imageModule: network,
    },
    {
      titleModule: "Cyber security training",
      descModule:
        "Making it easier to break into security, all through your browser.",
      imageModule: network,
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.titlepage}>
        <Typography variant="h4">Modules</Typography>
        <Typography variant="h6">
          Modules are made up of bite-sized rooms
        </Typography>
      </div>
      <Grid container className={classes.allitem} spacing={2}>
        {moduleItems.map((data) => (
          <Grid item className={classes.item} md={4}>
            <ModuleItem key={data.titleModule} {...data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
