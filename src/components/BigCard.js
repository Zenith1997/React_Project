
//big card 1 for plant page
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Photo from "./assets/First.jpg"
export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 1310 ,margin:"auto"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          
          height="640"
          //insert image here
          image={Photo}
          alt=""
          
        />
        
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="div">
            Heading
          </Typography>
          <Typography variant="body2" color="text.secondary">
         Description.............................................................................................
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}
