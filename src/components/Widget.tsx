import React from 'react';
import { Dialog, DialogActions, Slide, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import exapmle from '../assets/example.jpg';


const Widget: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleWidget = () => setOpen(!open);

  React.useEffect(() => {
    setTimeout(() => setOpen(true), 7000);
  }, []);

  return (
    <Dialog
      open={open}
      TransitionComponent={Slide}
      keepMounted
      onClose={handleWidget}
    >
      <Card>
        <CardMedia
          component='img'
          image={exapmle}
          alt='Free consultation'
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Free consultation!
          </Typography>
          <Typography variant='body2' color='gray'>
            We are ready to answer all your questions and provide professional assistance in your matter. Don't hesitate to contact us for consultation - we are always ready to help you find answers to your question.
          </Typography>
        </CardContent>
        <DialogActions>
          <Button 
            color='error'  
            variant='contained' 
            onClick={handleWidget}
          >
            Disagree
          </Button>
          <Button 
            color='success' 
            variant='contained' 
            onClick={handleWidget}
          >
            Agree
          </Button>
        </DialogActions>
      </Card>
    </Dialog>
  );
};

export default Widget;