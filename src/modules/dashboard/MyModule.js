import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(2, 0),
  },
  allList: {
    border: " 1px solid #555",
    borderRadius: "15px",
    margin: theme.spacing(2, 0),
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

export default function MyModule({id,name}) {
  const classes = useStyles();

  return (
    <div className={classes.allList}>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BookmarkBorderOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <Link
        color="inherit"
        to={{ pathname: `LeaningDetail/${id}`, state: { id } }}
      >
  <ListItemText primary={name} /> </Link>
        </ListItem>
        
      </List>
    </div>
  );
}
