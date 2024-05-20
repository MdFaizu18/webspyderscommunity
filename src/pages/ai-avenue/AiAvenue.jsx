import React from 'react'
import Navabar from '../../components/Navabar'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { OrangeButton, WebDevMainWrapper, WebDevSecondWrapper } from '../../assets/wrapper/WebdevWrapper'
import AdminDrawer from '../../components/AdminDrawer'
import img from '../../assets/images/noupdates.jpg'
import srihariImg from '../../assets/images/shrihari.jpg'


const AiAvenue = () => {

  return (
    <>
      <Navabar />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px', padding: '2% 5% 0% 5%' }}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/ai-avenue"
            aria-current="page"
          >
            Ai Avenue
          </Link>
        </Breadcrumbs>
      </Box>
      <WebDevMainWrapper>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography variant='h4' sx={{ fontWeight: '600' }}>Welcome to Ai Avenue💡  </Typography>

          <Typography variant='h4' textAlign={"center"} sx={{ fontFamily: 'Cedarville Cursive', fontWeight: '600', color: '#ffa500', margin: '2% 0' }}>“Artificial intelligence is not a substitute for human intelligence; it is a tool to amplify human creativity and ingenuity.”</Typography>
          <Typography variant='body1' sx={{ '@media (max-width:900px)': { textAlign: 'justify' } }}>
            Join the Web Spyders Community, a vibrant hub for AI enthusiasts and tech developers! Here, we share and exchange knowledge on all aspects of artificial intelligence, from fundamental concepts to advanced techniques like machine learning, deep learning, and neural networks. Our community is designed to help you stay updated with the latest industry trends, discover new tools and algorithms, and enhance your AI skills.Dive into the world of AI challenges, hackathons, and webinars hosted by industry leaders. Let's push the boundaries of what's possible in artificial intelligence together!
           
                </Typography>


          <Box sx={{ display: 'flex', gap: '20px' }}>
          {/* for admin info  */}
             <AdminDrawer
              imgs={srihariImg}
              name={"Shrihari"}
              email={"shriharijas@gmail.com"}
              description={"Passionate AI Enthusiast with a knack for exploring the fascinating realms of artificial intelligence. Eager to delve into machine learning algorithms, deep neural networks, and cutting-edge AI applications to drive innovation and solve complex problems."}
              linkedinl={"https://www.linkedin.com/in/shrihari-srinivasan/"}
              portfoliol={"/hari"}
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

export default AiAvenue
