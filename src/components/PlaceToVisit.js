import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

const useStyles1 = makeStyles({
  root: {
    maxWidth: 580,
    background: "rgb(76 19 19 / 45%)",
    margin: "5px",
    height: 1000
  },
  media: {
    marginLeft: 10,
    height: "300px",

  },
  content: {
    marginTop: "5px"
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff"
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd"
  },
  placement: {
    flexDirection: "column"
  }
});

export default function PlaceToVisit () {
  const classesss = useStyles();
  const classes = useStyles1();
  const checked = useWindowPosition('header');
  return (
    <div className={classesss.root} id="place-to-visit" style={{display:"flex",flexDirection:"row",justifyContent:"space-around", marginTop: "50px"}}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image=""
          title="Contemplative Reptile"
        >
          <iframe
            width="560"
            height="415"
            src="https://www.youtube.com/embed/jk-Uz61avs4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            3nd ODI
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            Sri Lanaka Women's vs India Women's
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image=""
          title="Contemplative Reptile"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jk-Uz61avs4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            3nd ODI
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            Sri Lanaka Women's vs India Women's
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
