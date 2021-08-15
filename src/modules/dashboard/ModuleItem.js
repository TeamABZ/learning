import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  itemModule: {
    textAlign: "center",
    display: "inline-block",
    border: " 1px solid #555",
    padding: "20px",
    height: 300,
    margin: "auto 1em",
  },
  media: {
    height: 130,
  },
}));
export default function ModuleItem({ titleModule, descModule, imageModule }) {
  const classes = useStyles();
  // const { titleModule, descModule, imageModule } = dataitem;
  return (
    <Grid className={classes.itemModule}>
      <Link color="inherit" href="/moduledetail">
        <img className={classes.media} src={imageModule} />

        {/* {imageModule} */}
        <Typography variant="h5">{titleModule} </Typography>
        {/* {titleModule} */}
        <Typography>{descModule}</Typography>
        {/* {descriptionModule} */}
      </Link>
    </Grid>
  );
}
