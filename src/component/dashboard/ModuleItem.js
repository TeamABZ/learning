import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  itemModule: {
    border: " 1px solid #555",
    width: "100%",
    textAlign: "center",
  },
}));
export default function ModuleItem(props) {
  const classes = useStyles();
  const { imageModule, titleModule, descriptionModule } = props;

  return (
    <Grid Container className={classes.itemModule}>
      <ImageIcon />
      {/* {imageModule} */}
      <Typography variant="h5">Networking Fundamentals </Typography>
      {/* {titleModule} */}
      <Typography>
        Understand, enumerate and attack various networking services in
        real-world environments.
      </Typography>
      {/* {descriptionModule} */}
    </Grid>
  );
}
