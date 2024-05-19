import React from 'react'
import Navabar from '../../components/Navabar'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { OrangeButton, WebDevMainWrapper, WebDevSecondWrapper } from '../../assets/wrapper/WebdevWrapper'
import AdminDrawer from '../../components/AdminDrawer'
import img from '../../assets/images/noupdates.jpg'
import faizuImg from '../../assets/images/faizu.jpg'

const WebDev = () => {
  return (
    <>
        <Navabar/>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px' ,padding:'2% 5% 0% 5%'}}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/web-dev"
            aria-current="page"
          >
            Web Dev
          </Link>
        </Breadcrumbs>
      </Box>
        <WebDevMainWrapper>
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
            <Typography variant='h4' sx={{fontWeight:'600'}}>Welcome to Web Dev🚀  </Typography>
      
          <Typography variant='h4' textAlign={"center"} sx={{ fontFamily: 'Cedarville Cursive',fontWeight:'600',color:'#ffa500',margin:'2% 0' }}>“If You Think Math is Hard Try Web Design.” - Pixxelznet</Typography>
          <Typography variant='body1' sx={{ '@media (max-width:900px)': {textAlign:'justify'}}}>
            Join the Web Spyders Community, a vibrant hub for web developers and tech enthusiasts! Here, we share and exchange knowledge on all aspects of web development, from the basics to advanced frameworks like the MERN stack (MongoDB, Express.js, React.js, Node.js), Java Full Stack and so on in the web development. Our community is designed to help you stay updated with the latest industry trends, discover new tools and techniques, and enhance your coding skills.
            Engage in exciting discussions, participate in collaborative projects, and access exclusive tutorials and resources. Whether you're a newbie looking to learn the ropes or a seasoned developer eager to share your expertise, Web Spyders offers something for everyone. Dive into the world of coding challenges and webinars hosted by industry experts.
             </Typography>


            <Box sx={{display:'flex',gap:'20px'}}>
            {/* for admin drawer  */}
            <AdminDrawer   
                    imgs={faizuImg}
                    name={"Mohammed Faizulla"}
                    email={"faizuatyahoo123@gmail.com"}
                   description={"Passionate MERN Stack Web Developer with a knack for building dynamic and user-friendly web applications. Always eager to learn and explore new technologies to deliver high-quality solutions."}
              linkedinl={"https://www.linkedin.com/in/mohammed-faizulla-34124a24a/?originalSubdomain=in"}
              portfoliol={"https://portfolio-4www.onrender.com/"}
            />




            <Link href="https://chat.whatsapp.com/DnGV00advE1EoPgOTPP0xN" target='_blank' sx={{ textDecoration: 'none' }}>
              <OrangeButton>Join Us</OrangeButton>
            </Link>
            </Box>
             </Box>
        </WebDevMainWrapper>
      <WebDevSecondWrapper>

          <Typography variant="h4" sx={{ fontWeight: '600' }}>Updated Notes</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '2%' }}>
            <Box>
              <img src={img} alt="" height={300} width={400} />
            </Box>
            <Box>
              <Typography variant='h4'>No updates to fetch</Typography>
            </Box>
          </Box>
        
      </WebDevSecondWrapper>


                
           
    </>
  )
}

export default WebDev