import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlaceToVisit from '../components/PlaceToVisit';
import Card from '../components/Card';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/a.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor:'#000',
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <Card/>
   
      <PlaceToVisit/>
    </div>
  );
}
