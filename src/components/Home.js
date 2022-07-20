import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlaceToVisit from "../components/PlaceToVisit";
import Card from "../components/Card";
import Slider from "./Carousel.js/Slider";
import BannerExample from "./Carousel.js/BannerExample";
import Slides from "./Carousel.js/Slides";
import ResponsiveAppBar from "../components/Nav";
import ResponsiveAppBar2 from "./Carousel.js/Nav2";
import {useEffect} from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "60vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/an.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#000",
    marginTop: "-148px",
  },
}));


const r= localStorage.getItem('myData');
if(r!=null){
  console.log(r);
}else{
  console.log("data not found");
}

export default function Home() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    {
     r!=null?<ResponsiveAppBar />:<ResponsiveAppBar2/>
    }
      
      <Slides />
      <Card />
      <PlaceToVisit />
    </div>
  );
}
