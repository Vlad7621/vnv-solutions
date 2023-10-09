import React from 'react';
import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import { tabsClasses } from '@mui/material/Tabs';
import ServiceCard from './ServiceCard';


const services: { service: string, title: string, description: string }[] = [
  { 
    service: 'Online shop',
    title: 'We create your online shop for convenient online shopping.', 
    description: 'This service includes the development and creation of an online shop where products or services can be purchased online. Online shops allow customers to search for, select, and buy products or services over the Internet, making it convenient and accessible to a wide range of shoppers.'
  },
  { 
    service: 'Landing Page',
    title: 'We design an effective landing page to attract customers.', 
    description: 'A landing page, also known as a start page, is a single-page website often used to promote a specific product, service, or event. It focuses heavily on a single goal, such as attracting customers or increasing conversions.'
  },
  { 
    service: 'Personal website',
    title: 'Your personal website for an impressive portfolio.', 
    description: `This service involves the development of a personal website for an individual, such as a professional, artist, writer, or other person. A personal website may include information about one's biography, portfolio, contact details, and more.`
  },
  { 
    service: 'Corporate site',
    title: 'We develop a corporate website for your company.', 
    description: `A corporate website is designed for businesses and companies. It serves as a platform for presenting a wider range of information, including the company's history, products and services, news, contact information, and more.`
  },
  { 
    service: 'Site audit',
    title: 'We conduct a website audit to optimize and improve performance.', 
    description: `Website audit is the process of examining and analyzing a website to identify issues that may impact its performance, loading speed, security, SEO optimization, and other aspects. After the audit, recommendations are made for resolving these issues.`
  },
  { 
    service: 'Individual consultation',
    title: 'Individual consultation for your Internet business needs.', 
    description: `This service offers personalized consultations and advice in the fields of web development, website design, marketing, and other aspects of internet business. A consultant provides tailored assistance and answers clients' questions, helping them achieve their goals.`
  }
]

const Services: React.FC = () => {
  const [index, seIndex] = React.useState<number>(0);

  const handleChange = (e: React.SyntheticEvent, currentIndex: number) => seIndex(currentIndex);

  return (
    <Box sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Container sx={{ pb: '20px' }}>
        <Typography
          padding='15px'
          fontSize='25px'
          fontWeight='600'
          fontStyle='italic'
        >
          SERVICES
        </Typography>
        <Box display='flex' justifyContent='center' >
          <Tabs
            value={index}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            allowScrollButtonsMobile
            sx={{ 
              mb: '10px',
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: '0.3' }
              }
            }}
          >
            {services.map(({ service }) => <Tab label={service} key={service}/>)}
          </Tabs>
        </Box>
          {services.map((service, i) => 
            <Box
              key={`service-${i}`}
              sx={{
                transform: `translateX(${100 * (i - index)}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <ServiceCard {...service} isHidden={i === index}/>
            </Box>
          )}
      </Container>
    </Box>
  );
}

export default Services;