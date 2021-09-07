import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

export default function LeftBar() {
  return (
    <>
      <List dense>
        <ListItem button>
          <Link color="inherit" href="/updateroom">
            <ListItemText primary="Genarate" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link color="inherit" href="/tasksetting">
            <ListItemText primary="Task" />
          </Link>
        </ListItem>
      </List>
    </>
  );
}
