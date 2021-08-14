import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles((theme) => ({
  itemModule: {
    textAlign: "center",
    display: "inline-block",
    border: " 1px solid #555",
    padding: "20px",
    height: "200px",
    margin: "auto 1em",
  },
}));
export default function ModuleItem({ dataitem }) {
  const classes = useStyles();
  const { titleModule, descModule, imageModule } = dataitem;
  return (
    <Grid className={classes.itemModule}>
      <ImageIcon />
      {/* {imageModule} */}
      <Typography variant="h5">{titleModule} </Typography>
      {/* {titleModule} */}
      <Typography>{descModule}</Typography>
      {/* {descriptionModule} */}
    </Grid>
  );
}
