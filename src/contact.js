import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    
  } from '@mantine/core';
  import {BsWhatsapp} from 'react-icons/bs';
  import {AiOutlineMail} from 'react-icons/ai';


const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 400,
      boxSizing: 'border-box',
      backgroundImage: `linear-gradient(-60deg, #29bdc1 0%, #29bdc1 100%)`,
      borderRadius: theme.radius.md,
      padding: theme.spacing.xl * 2.5,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        padding: theme.spacing.xl * 1.5,
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.white,
      lineHeight: 1,
    },
  
    description: {
      color: theme.colors[theme.primaryColor][0],
      maxWidth: 300,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
  
    form: {
      backgroundColor: theme.white,
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },
  
    social: {
      color: theme.white,
  
      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },
  
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },
  
    inputLabel: {
      color: theme.black,
    },
  
    control: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },
  }));
  
  

function Contact() {
    
    return (<div >
        
        <div className="form-div">
        <ContactUs/>
        </div>

        
    </div>
)}



function ContactUs() {

    const form = useRef();

    function reset(){

        document.getElementById("form").reset(); 
    }

    const sendEmail = () => {

        emailjs.sendForm('service_o254kcw', 'template_pspf1fi', form.current, 'LfuScSUIeiHe69orR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          alert('Thank you for your submission. We will contact you as soon as possible')

          
      };

    const { classes } = useStyles();
  
    
  
    return (
      <div className={classes.wrapper} id='wrapper'>
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
            <h4>Call us or Whatsapp:</h4>
        
       <div className="whatsapp"><BsWhatsapp/><p> (784)527-8041/(784)498-6565</p></div>
            </Text>

            <Text className={classes.description} mt="sm" mb={30}>
            <h4>Email us:</h4>
            <AiOutlineMail/>
            <> moderntechsvg@gmail.com</>
            </Text>

            <Text className={classes.description} mt="sm" mb={30}>
                Or fill out this form and we will contact you.
            </Text>
  
          
          
            <Group mt="xl"></Group>
          </div>
          <div className={classes.form}>

          <form id="form" ref={form}> 
          <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              name="name"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              name="email"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
           
            <TextInput
              label="Phone"
              placeholder="xxx-xxx-xxxx"
              mt="md"
              name="phone"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />


            <Textarea
              required
              label="Your message"
              placeholder="Message"
              minRows={4}
              mt="md"
                name="message"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
  
            <Group position="right" mt="md">
              <Button  onClick={() => {sendEmail(); reset(); }} className={classes.control } id="form-button">Send message</Button>
            </Group>
            </form>
            
          </div>
        </SimpleGrid>
      </div>
    );
  }

export default Contact;