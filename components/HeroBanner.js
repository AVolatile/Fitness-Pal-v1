import React, { useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  useEffect(() => {
    // Embed Chatbot configuration script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "TutCS4RUt5Ce2evRhLwnI",
        domain: "www.chatbase.co"
      }
    `;
    document.head.appendChild(configScript);

    // Embed Chatbot script
    const chatbotScript = document.createElement('script');
    chatbotScript.src = "https://www.chatbase.co/embed.min.js";
    chatbotScript.setAttribute('chatbotId', 'TutCS4RUt5Ce2evRhLwnI');
    chatbotScript.setAttribute('domain', 'www.chatbase.co');
    chatbotScript.defer = true;
    document.head.appendChild(chatbotScript);

    // Clean up scripts on component unmount
    return () => {
      document.head.removeChild(configScript);
      document.head.removeChild(chatbotScript);
    };
  }, []);

  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">HealthSync AI</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Unlock Your Potential with <br/> with the power of AI
      </Typography>
      <Stack>
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      </Stack>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
