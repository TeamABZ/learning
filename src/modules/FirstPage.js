import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MainFeaturedPost from "./MainFeaturedPost";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    padding: 0,
  },
}));

const mainFeaturedPost = {
  title: "Cyber security training",
  description:
    "Making it easier to break into security, all through your browser.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

export default function FirstPage() {
  return (
    <>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
      </main>
    </>
  );
}
