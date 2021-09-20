import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ToobarAdmin from "./ToobarAdmin";
import { useLocation } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";
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
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      justifyItems: "center",
      display: "inline-flex",
      textAlign: "center",
      marginBottom: "1em",
    },
    radioBox: {
      display: "inline",
    },
    input: {
      display: "none",
    },
  }));
  const classes = useStyles();
  const location = useLocation();
  const { id } = location.state;

  const [users, setUsers] = useState("");
  const token = localStorage.getItem("accessToken");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(`/api/v1/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("zz");
        console.log(data);
        console.log("xx");
        setUsers(data.user);

        console.log(data.user);
        setAvatar(data.user.avatar);
        setEmail(data.user.email);
        setName(data.user.name);
        setRole(data.user.role);
      } catch (error) {
        console.log(error.response.status); // 401
        console.log(error.response.data.error);
      }
    };
    getUsers();
  }, []);

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
            <div>
              <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
            </div>
            <div>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
            </div>{" "}
            <div className={classes.txtFildUser}>
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                className={classes.inputText}
              />
            </div>
            <div className={classes.txtFildUser}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                className={classes.inputText}
              />
            </div>
            <div className={classes.txtFildUser}>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                className={classes.inputText}
              />
            </div>
            <div>
              <RadioGroup
                className={classes.radioBox}
                aria-label="Role"
                name="Roles"
                value={role}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Member"
                  control={<Radio />}
                  label="Member"
                />
                <FormControlLabel
                  value="Admin"
                  control={<Radio />}
                  label="Admin"
                />
              </RadioGroup>
            </div>
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
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
