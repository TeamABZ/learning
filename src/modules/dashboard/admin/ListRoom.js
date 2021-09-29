import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
export default function ListRoom({ id, name, desc }) {
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
  const token = localStorage.getItem("accessToken");

  const [isDelete, setDelete] = useState(false);
  useEffect(() => {
    console.log(isDelete);
  }, [isDelete]);
  const userDelete = async () => {
    try {
      const { data } = await axios.delete(`api/v1/courses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDelete(!isDelete);
    } catch (error) {
      console.log(error.response.status); // 401
      console.log(error.response.data.error);
    }
  };

  const confirmDelete = () => {
    swal({
      title: "Are you sure?",
      text: "You will delete this Course",
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then(function (isConfirm) {
      /*Your Code Here*/
      if (isConfirm) {
        userDelete();
        console.log(isDelete);
        console.log(" Yes");
        window.location.reload();
      } else {
        console.log(" No");
      }
    });
  };
  return (
    <Grid container className={classes.allRoom}>
      <Grid item xl={4}>
        {/* <Avatar>
          <ImageIcon />
        </Avatar> */}
      </Grid>

      <Grid item xl={5}>
        <Link
          color="inherit"
          to={{ pathname: `updateroom/${id}`, state: { id } }}
        >
          <Typography variant="subtitle1" color="initial">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {desc}
          </Typography>
        </Link>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        onClick={confirmDelete}
        key={id}
      >
        Delete
      </Button>
    </Grid>
  );
}
