import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const CardProd = ({response}) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
        component='img'
        image={response.image}
        alt='picture'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {response.title}
          </Typography>
          <Typography color="primary">
            Price : {response.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Category: {response.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         More Info
        </Button>
      </CardActions>
    </Card>
  );
}
export default CardProd;