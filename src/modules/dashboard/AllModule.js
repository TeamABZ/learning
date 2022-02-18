import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ModuleItem from "./ModuleItem";
import network from "assets/images/network.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    display: "inline-block",
  },
  allitem: {
    flexWrap: "wrap",
    paddingBottom: 20,
  },
  titlepage: {
    padding: theme.spacing(3, 2),
  },
  toolbarSecondary: {
    background: "#000",
    color: "#fff",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function MyModule() {
  const classes = useStyles();
  // const moduleItems = [
  //   {
  //     titleModule: "Cyber security training",
  //     descModule:
  //       "Making it easier to break into security, all through your browser.",
  //     imageModule: network,
  //   },
  //   {
  //     titleModule: "Cyber security training",
  //     descModule:
  //       "Making it easier to break into security, all through your browser.",
  //     imageModule: network,
  //   },
  //   {
  //     titleModule: "Cyber security training",
  //     descModule:
  //       "Making it easier to break into security, all through your browser.",
  //     imageModule: network,
  //   },
  //   {
  //     titleModule: "Cyber security training",
  //     descModule:
  //       "Making it easier to break into security, all through your browser.",
  //     imageModule: network,
  //   },
  //   {
  //     titleModule: "Cyber security training",
  //     descModule:
  //       "Making it easier to break into security, all through your browser.",
  //     imageModule: network,
  //   },
  //   {
  //     titleModule: "Cyber security training",
  //     descModule:
  //       "Making it easier to break into security, all through your browser.",
  //     imageModule: network,
  //   },
  // ];
  const [course, setCourse] = useState([]);
  const [progress, setProgress] = useState([]);
const ppo=[];
  const token = localStorage.getItem("accessToken");
  const requestOne = axios.get("/api/v1/courses", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const requestTwo = axios.get("/api/v1/progress", {
    headers: { Authorization: `Bearer ${token}` },
  });



  // const getGithubData = () => {
   
  //   Promise.all( [axios.get('/api/v1/courses'),axios.get('/api/v1/progress')]).then(([ {data: ccourse}, {data: pprogres}] )=> {
  //     setCourse(Object.values(ccourse.courses));

  //     setProgress(Object.values(pprogres.progress));


  //   });

  // }


  useEffect(() => {


    const getCourse = async () => {
      const { data } = await axios.get("/api/v1/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCourse(data.courses);
      
  
    
    };
    const getProgress = async () => {
      const { data } = await axios.get("/api/v1/progress", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProgress(data.progress);
      
  
    
    };
    getCourse();
    getProgress();
    

    
  },[]);

  console.log(course); 
  console.log(progress); 

  var x="";

  const courselist = (course || []).map((item, i) => {
     
    var cc = item.id;

   var enroll;
const aa=(progress ||[]).map((item2,j)=>{
  
  if(item2.courseId===cc){
    return true 
  
  }
  else{
    return false 

  }


});


if (aa.includes(true)) {
  enroll=true;
}
else{
  enroll=false;
}

console.log("loop "+cc+" have "+enroll);





    return( <ModuleItem key={i} {...item} btn={enroll} /> );
    

});

  


  return (
    <div className={classes.root}>
      <div className={classes.titlepage}>
        <Typography variant="h4">Modules</Typography>
        <Typography variant="h6">
          Modules are made up of bite-sized rooms
        </Typography>
      </div>
      <Grid container className={classes.allitem} spacing={2}>
      {courselist} 
      </Grid>
    </div>
  );
}
