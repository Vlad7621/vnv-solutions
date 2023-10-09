import React from 'react';
import { Box, Container, TextField, FormControl, Stepper, Step, StepLabel, StepContent, Button, Typography } from '@mui/material';


const steps: { label: string }[] = [
  { label: 'Your Company Name' },
  { label: 'Project Name' },
  { label: 'Project Description' },
  { label: 'Target Audience' },
  { label: 'Design Preferences' }
];

const Brief: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleStep = (num: number) => setActiveStep(prevActiveStep => prevActiveStep + num);

  return (
    <Box sx={{ background: '#211F28', color: '#fff' }}>
      <Container sx={{ pb: '20px' }}>
        <Typography
          padding='15px'
          fontSize='25px'
          fontWeight='600'
        >
          PROJECT DETAILS
        </Typography>
        <Typography padding='0px 5px 15px 15px' fontSize='18px'> 
          A brief is a document or set of questions that contain important details about a project or task to ensure a clear understanding of requirements and expectations between parties. It helps avoid misunderstandings and ensures the successful completion of the task or project.
        </Typography>
        <Container maxWidth='xs'>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) =>
              <Step key={step.label}>
                <StepLabel>
                  <Typography color='#fff' >{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <FormControl fullWidth>
                    <TextField 
                      focused
                      multiline
                      variant='standard' 
                      InputProps={{ style: { color: '#fff' } }}
                    />
                  </FormControl>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant='contained'
                      onClick={handleStep.bind(null, 1)}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    {index !== 0 && <Button
                      disabled={index === 0}
                      onClick={handleStep.bind(null, -1)}
                      sx={{ mt: '10px', mr: '10px' }}
                    >
                      Back
                    </Button>}
                  </Box>
                </StepContent>
              </Step>
            )}
          </Stepper>
        </Container>
      </Container>
    </Box>
  );
}

export default Brief;