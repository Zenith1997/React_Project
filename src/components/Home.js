import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlaceToVisit from '../components/PlaceToVisit';
import Card from '../components/Card';
import Slider from "./Carousel.js/Slider";



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '60vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/a.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor:'#000',
    marginTop:"-80px",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Slider/>
      <Card/>
      <PlaceToVisit/>
    </div>
  );
}
