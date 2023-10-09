import React from 'react';
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button  } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DesignServices from '@mui/icons-material/DesignServices';
import Groups from '@mui/icons-material/Groups';
import EmojiObjects from '@mui/icons-material/EmojiObjects';
import HighQuality from '@mui/icons-material/HighQuality';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import ContactSupport from '@mui/icons-material/ContactSupport';
import ShoppingCart from '@mui/icons-material/ShoppingCart';


const benefit: { title: string, description: string, icon: React.ReactNode }[] = [
  { title: 'Advanced Design', description: 'Our team of professionals creates modern and innovative designs that will set you apart from competitors.', icon: <DesignServices/> },
  { title: 'Creative Team', description: 'Our creative team is always ready to bring fresh and unique ideas to every project, giving it unmatched style and impact.', icon: <Groups/> },
  { title: 'Custom Solutions', description: 'We specialize in tailoring our services to your specific needs, providing custom solutions that address your unique requirements and objectives.', icon: <EmojiObjects/> },
  { title: 'Quality Assurance', description: 'Our company proudly stands behind the quality of our products and services, ensuring the highest quality standards.', icon: <HighQuality/> },
  { title: 'Affordable Price', description: 'We offer high quality at an affordable price, helping our clients save without compromising on quality.', icon: <MonetizationOn/> },
  { title: 'Quick Support', description: 'Our customer support is always ready to assist you in resolving any questions or issues promptly and effectively.', icon: <ContactSupport/> }
]

const WhyUs: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
      <Container sx={{ pb: '20px' }}>
        <Box display='flex'>
          <Typography
            mr='auto'
            padding='15px'
            fontSize='25px'
            fontWeight='600'
            fontStyle='italic'
          >
            WHY US?
          </Typography>
          <Button
            variant='outlined'
            size='medium'
            startIcon={<ShoppingCart/>}
            sx={{
              color: '#fff',
              borderColor: '#fff',
              margin: 'auto 0px',
              ":hover": {
                background: '#fff',
                color: '#000',
                borderColor: '#fff'
              }
            }}
          >
            Order
          </Button>
        </Box>
        {benefit.map(({ title, description, icon }) => 
          <Accordion
            key={title}
            sx={{ color: '#fff', backgroundColor: '#121212' }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMore sx={{ color: '#fff' }} />
              }
            >
              <Box display='flex' alignItems='center'>
                {icon}
                <Typography sx={{ ml: '10px' }}>{title}</Typography>
              </Box>
            </AccordionSummary>
              <AccordionDetails>
                <Typography>{description}</Typography>
              </AccordionDetails>
          </Accordion>
        )}
      </Container>
    </Box>
  );
}

export default WhyUs;