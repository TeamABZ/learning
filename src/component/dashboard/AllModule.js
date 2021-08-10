import React from "react";
import Header from "../Header";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import ModuleItem from "./ModuleItem";
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
        <Typography variant="h4">Modules</Typography>
        <Typography variant="h6">
          Modules are made up of bite-sized rooms
        </Typography>
        <Grid container>
          <Grid item>
            <ModuleItem></ModuleItem>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
