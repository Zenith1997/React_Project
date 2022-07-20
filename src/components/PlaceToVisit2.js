//small cards for plant page

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";

import useWindowPosition from "../hook/useWindowPosition";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const useStyles1 = makeStyles({
  root: {
    maxWidth: 600,
    //change card color
    background: "rgb(76 19 19 / 40%)",
    marginTop: "10px",
    marginBottom: "190px",
    height: 700,
    shadowColor: "#fff",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.4,
    shadowRadius: 9,
    elevation: 5,
  },
  media: {
    marginLeft: 0,
    height: "600px",
  },
  content: {
    marginTop: "500px",
  },
  title: {
    fontFamily: "'Athiti', sans-serif",
    fontWeight: "",
    fontSize: "2rem",
    color:  "rgb(256 256 256 / 60%)",
    marginLeft:"10px",
    marginTop:"30px"
  },
  desc: {
    fontFamily: "'Handlee', cursive",
    fontSize: "1.1rem",
    color:  "rgb(256 256 256 / 60%)",
    marginLeft:"10px"
  },
  placement: {
    flexDirection: "column",
  },
});

export default function PlaceToVisit2() {
  const asus = useStyles();
  const classes = useStyles1();
  const checked = useWindowPosition("header");
  return (
    <div>
    <div
    className={asus.root}
    id="place-to-visit"
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: "50px",
    }}
  >

    <Card className={classes.root}>
      <CardMedia image="">
      <iframe
      style={{ marginTop: "0px", borderRadius: "5px" }}
      title="sd"
      src="http://localhost:3000/d/M06zvkU7k/pie-2?orgId=1&from=1649196361497&to=1649217961497&theme=light"
      width="600"
      height="500"
      frameborder="0"
    ></iframe>
      <Typography
      gutterBottom
      variant="h5"
      component="h1"
      className={classes.title}

    
      >
      Text
      </Typography>
      <Typography
      className={classes.desc}>
      By the description below we can guess ...............................................................
      </Typography>
      </CardMedia>
      
    </Card>
    <Card className={classes.root}>
    <CardMedia image="">
    <iframe
    style={{ marginTop: "0px", borderRadius: "5px" }}
    title="sd"
    src="http://localhost:3000/d/M06zvkU7k/pie-2?orgId=1&from=1649196361497&to=1649217961497&theme=light"
    width="600"
    height="500"
    frameborder="0"
  ></iframe>
    <Typography
    gutterBottom
    variant="h5"
    component="h1"
    className={classes.title}

  
    >
    Text
    </Typography>
    <Typography
    className={classes.desc}>
    By the description below we can guess ..............................................................
    </Typography>
    </CardMedia>
    
  </Card>

  
  </div>
  
 
    </div>

  );
}
