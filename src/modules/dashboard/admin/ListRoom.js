import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function ListRoom({ name, desc }) {
  const useStyles = makeStyles((theme) => ({
    allRoom: {
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #c1c1c1",
      borderRadius: "25px",
      margin: "1em 0",
      padding: "2em 0",
    },
  }));
  const classes = useStyles();

  return (
    <Grid container className={classes.allRoom}>
      <Grid item xl={4}>
        {/* <Avatar>
          <ImageIcon />
        </Avatar> */}
      </Grid>

      <Grid item xl={5}>
        <Link color="inherit" noWrap variant="h6" href="/updateroom">
          <Typography variant="subtitle1" color="initial">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {desc}
          </Typography>
        </Link>
      </Grid>
      <Button variant="contained" color="secondary">
        Delete
      </Button>
    </Grid>
  );
}
