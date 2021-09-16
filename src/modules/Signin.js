import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import swal from "sweetalert";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));
// async function loginUser(credentials) {
//   return fetch("https://msitapi.azurewebsites.net/api/v1/auth/sign-in", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }
export default function Signin() {
  const classes = useStyles();
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  // const profile = async () => {
  //   const token = JSON.parse(localStorage.getItem("accessToken"));

  //   await axios
  //     .get("/api/v1/auth/profile", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/api/v1/auth/sign-in", {
      email,
      password,
    });
    if ("token" in data) {
      swal("Success", "login Success", "success", {
        buttons: false,
        timer: 3000,
      }).then(async (value) => {
        localStorage.setItem("accessToken", data["token"]);

        // localStorage.setItem("user", JSON.stringify(response["user"]));

        // window.location.href = "/userprofile";
        console.log(data);

        await axios
          .get("/api/v1/auth/profile", {
            headers: { Authorization: `Bearer ${data["token"]}` },
          })
          .then((res) => {
            const { user } = res.data;
            localStorage.setItem("user", JSON.stringify(user));

            console.log(user);
            if (user["role"] === "Member") {
              window.location.href = "/userprofile";
            } else if (user["role"] === "Admin") {
              window.location.href = "/adminprofile";
            }
          });
      });
    } else {
      swal("Failed", "user or password failed", "error");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                "Don't have an account? Sign Up"
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
