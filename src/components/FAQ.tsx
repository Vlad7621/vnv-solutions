import React from 'react';
import { Box, Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import ArrowForwardIosSharp from '@mui/icons-material/ArrowForwardIosSharp';

const FAQs: { question: string; answer: string }[] = [
  { question: 'What does your company do, and what services do you provide?', answer: 'We specialize in web development and offer services for creating websites, web applications, e-commerce stores, and other web solutions. We also provide design, optimization, and ongoing support for web projects.' },
  { question: 'What technologies do you use for web development?', answer: 'We use modern technologies and stacks such as HTML5, CSS3, JavaScript, React, Angular, Vue.js, Node.js, PHP, Python, and others to create web products. Our choice of technologies depends on the specific requirements of the client.' },
  { question: 'What are the stages involved in the web development process at your company?', answer: ' Our development process includes stages such as requirement analysis, design, development, testing, optimization, and website deployment. We also offer support and maintenance services.' },
  { question: 'How long does it take to create a website?', answer: 'The duration of website development depends on various factors, including project complexity, scope of functionality, and client requirements. We can provide a time estimate after a detailed project discussion.' },
  { question: 'What are your pricing options for services?', answer: 'The cost of our services depends on the scope of work and project complexity. We offer a customized approach to each client and are ready to provide a detailed cost estimate after an initial meeting and project discussion.' },
  { question: 'Do you offer support and maintenance after the website is launched?', answer: 'Yes, we provide support and maintenance services for web projects after launch. We can assist with technical issues, perform updates, ensure security, and handle other tasks.' },
  { question: 'Do you have experience in developing specific types of websites, such as corporate sites, e-commerce stores, blogs, etc.?', answer: 'Yes, we have experience in developing various types of websites and web applications. Our experience includes creating corporate websites, e-commerce stores, blogs, portfolios, and many other types of web projects.' },
  { question: 'How can I contact you for consultation or to start a collaboration?', answer: 'You can contact us through the contact form on our website, via email, or by phone. We are ready to respond to all your inquiries and provide detailed consultation regarding your project.' }
]

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange = (num: number) => setExpanded(num !== expanded ? num : false);

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
      <Container sx={{ pb: '20px' }}>
        <Typography
          padding='15px'
          fontSize='25px'
          fontWeight='600'
          fontStyle='italic'
        >
          FAQ
        </Typography>
        {FAQs.map(({ question, answer }, index) => 
          <Accordion
            key={question}
            expanded={expanded === index}
            onChange={handleChange.bind(null, index)}
            sx={{ color: '#fff' }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharp sx={{ fontSize: '15px', color: '#fff' }}/>
              }
              sx={{
                background: '#121212',
                flexDirection: 'row-reverse',
                [`& .${accordionSummaryClasses.expandIconWrapper}.Mui-expanded`]: {
                  transform: 'rotate(90deg)',
                },
                [`& .${accordionSummaryClasses.content}`]: { ml: '8px' }
              }}
            >
              <Typography fontWeight='600' >{question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '16px', background: '#000' }}>
              <Typography>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </Container>
    </Box>
  );
};

export default FAQ;