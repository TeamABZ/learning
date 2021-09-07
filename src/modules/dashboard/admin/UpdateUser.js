import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ToobarAdmin from "./ToobarAdmin";

export default function UpdateUser() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    btnUser: {
      margin: theme.spacing(1),
    },
    titlepage: {
      padding: theme.spacing(2, 2),
      color: "#fff",
      background: "#000",
    },
    txtFildUser: {
      padding: "1em 0",
    },
    inputText: {
      width: "400px",
    },
    allGroup: {
      padding: "1em 0",
      textAlign: "center",
      justifyContent: "center",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ToobarAdmin></ToobarAdmin>

      <div className={classes.titlepage}>
        <Typography variant="h4">Setting User</Typography>
        <Typography variant="h6">update user account</Typography>
      </div>
      <Grid container className={classes.allGroup}>
        <Grid item xl={12}>
          <form noValidate autoComplete="off">
            <div className={classes.txtFildUser}>
              <TextField
                label="Username"
                variant="outlined"
                className={classes.inputText}
              />
            </div>
            <div className={classes.txtFildUser}>
              <TextField
                label="Password"
                variant="outlined"
                className={classes.inputText}
              />
            </div>
            <div className={classes.txtFildUser}>
              <TextField
                label="Email"
                variant="outlined"
                className={classes.inputText}
              />
            </div>
          </form>{" "}
          <Button
            variant="contained"
            color="secondary"
            className={classes.btnUser}
          >
            Save
          </Button>
          <Link href="/usersetting">
            <Button
              variant="contained"
              color="primary"
              className={classes.btnUser}
            >
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
