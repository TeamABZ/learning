import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ListModule from "./ListModule";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titlepage: {
    padding: theme.spacing(3, 2),
    color: "#fff",
    background: "#000",
  },
}));
export default function ModuleDetail() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titlepage}>
        Back to all modules
        <Typography variant="h6"></Typography>
        <Typography variant="h4">Networking Fundamentals</Typography>
        <Typography variant="h6">
          Understand the core security issues with web applications, and learn
          how to exploit them using industry tools and techniques
        </Typography>
      </div>
      <Grid container>
        <Grid item xl={7}>
          <ListModule></ListModule>
        </Grid>
        <Grid item xl={3}>
          <Typography variant="h4"> Need to know</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
