import React from 'react';
import { Typography, Button, Card, CardContent, CardMedia, CardActionArea, CardActions } from '@mui/material';
import service from '../assets/example.jpg';


interface IServiceCard {
  title: string;
  description: string;
  isHidden: boolean;
}

const ServiceCard: React.FC<IServiceCard> = ({ title, description, isHidden }) => {
  return (
    <Card hidden={!isHidden}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='300'
          image={service}
          alt='service'
        />
        <CardContent>
          <Typography fontWeight='600' fontSize='20px'>{title}</Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='large' color='primary'>I WANT</Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;