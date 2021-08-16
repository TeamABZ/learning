import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ListModule from "./ListModule";
import network from "assets/images/network.png";
import ModuleItem from "./ModuleItem";
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
  const knowlearn = {
    titleModule: "Cyber security training",
    descModule:
      "Making it easier to break into security, all through your browser.",
    imageModule: network,
  };
  const nextlearn = {
    titleModule: "Cyber security training",
    descModule:
      "Making it easier to break into security, all through your browser.",
    imageModule: network,
  };

  const lessonItem = [
    {
      topic: "http",
      title: "Web Fundamentals",
      desc: "Learn how the web works",
    },
    {
      topic: "OWASP",
      title: "OWASP Top 10",
      desc: "Learn about and exploit each of the OWASP Top 10 vulnerabilities; the 10 most critical web security risks.",
    },
    {
      topic: "http",
      title: "Web Fundamentals",
      desc: "Learn how the web works",
    },
    {
      topic: "OWASP",
      title: "OWASP Top 10",
      desc: "Learn about and exploit each of the OWASP Top 10 vulnerabilities; the 10 most critical web security risks.",
    },
  ];
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
        <Grid item xl={8}>
          {lessonItem.map((data) => (
            <ListModule key={data.titleModule} {...data} />
          ))}
        </Grid>
        <Grid item xl={4}>
          <Typography variant="h4"> Need to know</Typography>
          <Grid item>
            <ModuleItem key={knowlearn.titleModule} {...knowlearn} />
          </Grid>
          <hr />
          <Typography variant="h4"> Next Learn</Typography>
          <Grid item>
            <ModuleItem key={nextlearn.titleModule} {...nextlearn} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
