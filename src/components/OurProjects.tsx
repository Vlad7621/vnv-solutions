import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, MobileStepper } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import ExpandMore from '@mui/icons-material/ExpandMore';
import volstinyProduction from '../assets/volstiny_production.png'
import learnitlive from '../assets/learnitlive.png'
import iren from '../assets/iren.png'


const projects = [
  {
    title: 'Marketplace',
    photo: volstinyProduction,
    description: 'Volstiny production - Marketplace for a Designers agency. Powerful and creative website for powerfull creators. Unique design, a lot of animations and internal marketplace - website is faster than a Forest Gump and ready for a SEO ad campaigns.'
  },
  {
    title: 'Web-Service',
    photo: learnitlive,
    description: 'Lernitlive - webservice for coaches and experts where they can teach online. In easy words - it is a marketplace with some more functionality to pass courses and take classes. You can look throug the courses, choose your coach, according to his rate and reviews. Functionality: you can register,buy classes, chat with your coach and leave reviews.'
  },
  {
    title: 'Delivery Service',
    photo: iren,
    description: 'Iren Banquet Hall - Delivery service for tasty food from Iren. You can register, order and pay not leaving the website!'
  }
];

const OurProjects: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleStepChange = (step: number) => setActiveStep(step);

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
      <Container sx={{ pb: '20px' }}>
        <Typography
          padding='15px'
          fontSize='25px'
          fontWeight='600'
          fontStyle='italic'
        >
          OUR PROJECTS
        </Typography>
        <MobileStepper
          variant='dots'
          steps={projects.length}
          position='static'
          activeStep={activeStep}
          nextButton={null}
          backButton={null}
          sx={{ 
            justifyContent: 'center', 
            height: '15px',
            background: '#121212'
          }}
        />
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {projects.map(({ title, description, photo }) => 
            <div key={title}>
              <img
                src={photo}
                alt={title}
                style={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%'
                }}
              />
              <Accordion square sx={{ color: '#fff', background: '#121212' }}>
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: '#fff' }}/>}
                >
                  <Typography fontWeight='600'>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{description}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )}
        </SwipeableViews>
      </Container>
    </Box>
  );
}

export default OurProjects;