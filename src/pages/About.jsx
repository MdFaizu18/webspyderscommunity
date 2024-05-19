import React from 'react'
import Navabar from '../components/Navabar'
import { WebDevAboutWrapper } from '../assets/wrapper/AboutWrapper'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { OrangeButton } from '../assets/wrapper/WebdevWrapper'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Navabar/>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px', padding: '2% 5% 0% 5%' }}>
                  <Breadcrumbs>
                      <Link underline="hover" color="inherit" href="/">
                          Home
                      </Link>
                      <Link
                          underline="hover"
                          color="text.primary"
                          href="/about"
                          aria-current="page"
                      >
                          About
                      </Link>
                  </Breadcrumbs>
              </Box>
          <WebDevAboutWrapper>
           <Box>
            <Typography variant='h4' sx={{fontWeight:'600'}}>About Our Community</Typography>
            <Typography variant='body1' sx={{fontWeight:'500'}}>
            <br /> 
                      🎉 Welcome to Web Spyders Community! 🎉
                      <br /> <br />
                      We are thrilled to welcome you to our tech-savvy community dedicated to exploring the latest in technology, coding, and web development!
                      <br /> <br />
                      🌐 About Us 🌐
                      Web Spyders is a space for all tech enthusiasts, developers, and learners alike. Whether you're a seasoned coder or just starting your journey, you're in the right place. Our community is designed to be a hub where we share knowledge, discuss day-to-day tech trends, and dive deep into the world of web development and technology deep inside
                      <br /> <br />
                      🚀 What to Expect 🚀
                      <br /> <br />
                      <b>Tech Crunch:</b> Stay informed about the latest trends, news, and innovations in the tech industry.(Admins - Athesh Pargau, Theja Ashwin)
                    <br />
                      <b>Java | DSA:</b> Engage in discussions about coding techniques, algorithms, data structures, and more. (Admins - Hariharan, Jeeva)
                      <br /> 
                      <b>Web Dev:</b> Tips, and resources to level up your web development skills, covering everything from frontend design to backend architecture. (Admin - Md Faizu)
                      <br /> 
                      <b>AI Avenue:</b> Discover the latest developments and innovations in the AI Space (Admin - Srihari)
                      <br /> 
                      <b>Cyber Bytes:</b> Just get to know about the cyber stuffs (Admin - Athesh Pargau)
                      <br /> 
                      <b> Cloud & DevOps:</b> Just get to know about the basic to advance of cloud and devOps for the deployment (Admin - Christober)
                      <br /> <br />
                      🤝 Get Involved 🤝
                      This community thrives on your participation! Share your thoughts, ask questions, and contribute to discussions. Whether you're here to learn, teach, or collaborate, your input is invaluable.
                      <br /> <br />
                      💡 Stay Connected 💡
                      To ensure you don't miss out on any updates or discussions, make sure to turn on notifications for this group.
                      <br /> <br />
                      🎓 Let's Learn and Grow Together 🎓
                      We're excited to embark on this journey with you all. Let's explore, learn, and grow together as we navigate the ever-evolving world of technology!
                      <br /> <br />
                      Cheers to the beginning of an amazing adventure in Web Spyders Community! 🕸💻


            </Typography>
            <Box sx={{margin:"3% 0%"}}>
                      <Link href="https://chat.whatsapp.com/DnGV00advE1EoPgOTPP0xN" target='_blank' sx={{ textDecoration: 'none' }}>
                          <OrangeButton>Join Us</OrangeButton>
                      </Link>
            </Box>

           </Box>
          </WebDevAboutWrapper>
          <Footer/>
    </>
  )
}

export default About