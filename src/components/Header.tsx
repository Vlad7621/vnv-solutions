import React from 'react';
import { AppBar, Container, Button, Box, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import photo from '../assets/example.jpg';


const Header: React.FC = () => {
  return (
    <AppBar
      sx={{
        position: 'relative',
        height: '70vh',
        backgroundImage: `url(${photo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 1
      }}
    >
      <Box
        position='absolute'
        top='0'
        left='0'
        width='100%'
        height='100%'
        sx={{ backgroundColor: `#000`, opacity: '0.9' }}
      >
      </Box>
      <Container 
        maxWidth='xl'
        sx={{
          display: 'flex',
          alignItems: 'center',
          zIndex: '10'
        }}
      >
        <img 
          src={logo} 
          alt='VNV Solutions'
          style={{ width: '20vh', marginRight: 'auto' }}
        />
        <Button
          variant='contained'
          size='medium'
          sx={{
            background: '#fff',
            color: '#000',
            width: '120px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { background: '#fff', transform: 'scale(1.2)' }
          }}
        >
          Order
        </Button>
      </Container>
      <Container sx={{ zIndex: '10' }}>
        <Typography variant='h2' sx={{ color: '#fff', marginTop: '20px' }}>
          <b>VNV</b> Solutions
        </Typography>
        <Typography variant='h5' sx={{ color: '#fff', marginTop: '10px' }}>
          Easy, quality, IT - winning solution for your business
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Header;