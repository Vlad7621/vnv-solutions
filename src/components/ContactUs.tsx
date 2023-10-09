import React from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText, Divider, Accordion, AccordionSummary, AccordionDetails, Alert, Snackbar } from '@mui/material';
import { IAlert } from '../models/IAlert';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ContactForm from './ContactForm';


const contacts: { way: string; contact: string; icon: React.ReactNode }[] = [
  { way: 'Email', contact: 'team@vnv.solutions', icon: <EmailIcon/> },
  { way: 'Telegram', contact: '@vnv_solutions', icon: <TelegramIcon/> },
  { way: 'WhatsApp', contact: '+38 (098) 76-54-321', icon: <WhatsAppIcon/> },
  { way: 'Address', contact: 'Karla Miklʹosha, 7, Lviv, Ukraine', icon: <PlaceIcon/> },
]

const ContactUs: React.FC = () => {
  const [alert, setAlert] = React.useState<IAlert>({ type: 'error', message: '' }); 

  const closeAlert = () => setAlert({ type: alert?.type, message: '' });

  return (
    <Box sx={{ background: '#fff', color: '#000' }}>
      <Container maxWidth='sm' sx={{ pt: '15px', pb: '15px' }}>
        <Card sx={{ borderRadius: '0px' }}>
          <CardContent sx={{ background: '#000', padding: '0px' }}>
            <Accordion sx={{ color: '#fff', background: '#000' }}>
              <AccordionSummary 
                expandIcon={ <ExpandMore sx={{ color: '#fff' }}/> }
              >
                <Typography fontSize='20px' fontWeight='600'>
                  CONTACT US
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0px 0px 8px 0px'}}>
                {contacts.map(({ way, contact, icon }, index) => 
                  <List key={way} sx={{ width: '100%', padding: '0px' }}>
                    <ListItem sx={{ padding: '4px 30px' }}>
                      {icon}
                      <ListItemText 
                        primary={way} 
                        secondary={contact} 
                        sx={{ color: '#fff', fontWeight: '600', ml: '15px' }}
                        secondaryTypographyProps={{ color: '#fff' }}
                      />
                    </ListItem>
                    {contacts.length - 1 !== index && <Divider variant='middle' sx={{ background: '#fff' }}/>}
                  </List>
                )} 
              </AccordionDetails>
            </Accordion>
          </CardContent>
          <CardContent>
            <ContactForm setAlert={setAlert}/>
          </CardContent>
        </Card>
      </Container>
      <Snackbar 
        open={!!alert?.message}
        autoHideDuration={6000}
        onClose={closeAlert}
      >
        <Alert 
          variant='filled'
          severity={alert?.type} 
          sx={{ width: '100%', color: '#000' }}
          onClose={closeAlert}
        >
          {alert?.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactUs;