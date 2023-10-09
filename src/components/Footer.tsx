import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Telegram from '@mui/icons-material/Telegram';
import LinkedIn from '@mui/icons-material/LinkedIn';

const links: { icon: React.ReactNode, href: string }[] = [
  { icon: <Facebook fontSize='large'/>, href: 'https://www.facebook.com/profile.php?id=100088433736254' },
  { icon: <Instagram fontSize='large'/>, href: 'https://instagram.com/vnv_solutions?igshid=MWI4MTIyMDE=' },
  { icon: <Telegram fontSize='large'/>, href: 'https://t.me/vnv_solutions' },
  { icon: <LinkedIn fontSize='large'/>, href: 'https://www.linkedin.com/company/vnv-tech' },
]

const Footer: React.FC = () => {
  return (
    <Box pt='80px' sx={{ backgroundColor: '#000', color: '#fff' }}>
      <Box 
        component='a'
        href='mailto: team@vnv.solutions'
        sx={{ color: '#fff', textDecoration: 'none' }}
      >
        <Typography 
          variant='h5' 
          textAlign='center' 
          fontWeight='500' 
          pb='5px'
          sx={{
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.3)' }
          }}
        >
          team@vnv.solutions
        </Typography>
      </Box>
      <Divider 
        variant='middle' 
        sx={{ background: '#fff', mr: '10%', ml: '10%' }}
      />
      <Container 
        maxWidth='sm' 
        sx={{ 
          display:'flex',
          justifyContent: 'center',
          gap: '20px',
          pt: '40px', 
          pb: '50px' 
        }}
      >
        {links.map(({ icon, href }) => 
          <Box 
            key={href}
            component='a' 
            href={href}
            sx={{ 
              color:'#fff',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.5)' }
            }}
          >
            {icon}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Footer;