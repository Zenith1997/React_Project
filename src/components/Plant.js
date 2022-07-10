import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlaceToVisit from './PlaceToVisit';
import Card from './Card';
import Slider from "./Carousel.js/Slider";
import BannerExample from './Carousel.js/BannerExample';
import Slides from './Carousel.js/Slides2';
import Slides2 from './Carousel.js/Slides2';
import PlaceToVisit2 from './PlaceToVisit2';
import MultiActionAreaCard from './BigCard';
import ResponsiveAppBar from './Nav';
import MultiActionAreaCard2 from './BigCard2';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '60vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/an.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor:'#000',
    marginTop:"-148px",
  },
}));
export default function Plant() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <ResponsiveAppBar/>
  
<Slides2/>
      <Card/>
      <PlaceToVisit2/>
      <MultiActionAreaCard/>
      <div style={{marginTop:"50px"}}>
      <MultiActionAreaCard2/>
      </div>
     
      
    </div>
  );
}





