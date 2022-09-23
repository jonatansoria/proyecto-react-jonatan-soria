import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from "react-router-dom"

const CardProd = ({response}) => {
  return (
    <Card sx={{ maxWidth: 225 }}>
      <Link to={`/detail/${response.id}`}>
      <CardActionArea>
        <CardMedia
        component='img'
        image={response.image}
        alt='picture'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {response.Title}
          </Typography>
          <Typography color="primary">
            Precio : ${response.Price}
          </Typography>
          <Typography variant="body" color="text.secondary">
           Descripcion: {response.Description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Categoria: {response.Category}
           </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
export default CardProd;