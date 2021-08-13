import React from "react";
import Header from "../Header";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ImageIcon from "@material-ui/icons/Image";

import { makeStyles } from "@material-ui/core/styles";
import ModuleItem from "./ModuleItem";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  item: {
    display: "inline-block",
  },
  allitem: {
    flexWrap: "warp",
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
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="lg">
        <Header title="Leaning">
          <Toolbar
            component="nav"
            variant="dense"
            className={classes.toolbarSecondary}
          >
            <Typography variant="h4">Lean</Typography>
          </Toolbar>
        </Header>
        <div className={classes.titlepage}>
          <Typography variant="h4">Modules</Typography>
          <Typography variant="h6">
            Modules are made up of bite-sized rooms
          </Typography>
        </div>
        <Grid container className={classes.allitem} spacing={2}>
          <Grid item className={classes.item} sm={4}>
            <ModuleItem></ModuleItem>
          </Grid>
          <Grid item className={classes.item} sm={4}>
            <ModuleItem></ModuleItem>
          </Grid>
          <Grid item className={classes.item} sm={4}>
            <ModuleItem></ModuleItem>
          </Grid>
          <Grid item className={classes.item} sm={4}>
            <Grid className={classes.itemModule}>
              <ImageIcon />
              {/* {imageModule} */}
              <Typography variant="h5">Networking Fundamentals </Typography>
              {/* {titleModule} */}
              <Typography>
                Understand, enumerate and attack various n
              </Typography>
              {/* {descriptionModule} */}
            </Grid>
          </Grid>
          <Grid item className={classes.item}>
            <ModuleItem></ModuleItem>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
