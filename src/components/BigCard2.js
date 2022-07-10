import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Photo from "./assets/First.jpg"
export default function MultiActionAreaCard2() {
  return (
    <Card sx={{ maxWidth: 1310 ,margin:"auto"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="640"
          image={Photo}
          alt=""
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}
