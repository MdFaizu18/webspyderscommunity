import React from 'react'
import Navabar from '../../components/Navabar'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { OrangeButton, WebDevMainWrapper, WebDevSecondWrapper } from '../../assets/wrapper/WebdevWrapper'
import AdminDrawer from '../../components/AdminDrawer'
import img from '../../assets/images/noupdates.jpg'
import thejaImg from '../../assets/images/theja.jpg'

const TechCrunch = () => {
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
            href="/tech-crunch"
            aria-current="page"
          >
           Tech-Crunch
          </Link>
        </Breadcrumbs>
      </Box>
      <WebDevMainWrapper>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography variant='h4' sx={{ fontWeight: '600' }}>Welcome to Tech Crunch 📲  </Typography>

          <Typography variant='h4' textAlign={"center"} sx={{ fontFamily: 'Cedarville Cursive', fontWeight: '600', color: '#ffa500', margin: '2% 0' }}>“Technology is a useful servant but a dangerous master"</Typography>
          <Typography variant='body1' sx={{ '@media (max-width:900px)': { textAlign: 'justify' } }}>
            Join the Web Spyders Community, a vibrant hub for tech enthusiasts and industry professionals! In our Tech Crunch section, we share and discuss daily tech news and updates, covering the latest trends, breakthroughs, and innovations across the tech world. From cutting-edge advancements in AI, cybersecurity, and cloud computing to the newest gadgets, software updates, and industry developments, we keep you informed and ahead of the curve.

Engage in lively discussions, share your perspectives, and stay connected with the fast-paced world of technology. Whether you're a tech newbie eager to learn or a seasoned professional looking to stay updated, Tech Crunch offers something for everyone. Dive into the world of daily tech news, analysis, and insights. Let's explore the ever-evolving tech landscape together!      </Typography>


          <Box sx={{ display: 'flex', gap: '20px' }}>
            {/* for admin info  */}
            <AdminDrawer
              imgs={thejaImg}
              name={"Theja Ashwin"}
              email={"thejaashwin62@gmail.com"}
              description={"Passionate Tech Enthusiast with a knack for exploring diverse areas of technology, from cybersecurity and blockchain to web development and AI. Always eager to learn and implement the latest technologies to innovate and create secure, transparent solutions."}
              linkedinl={"null"}
              portfoliol={"null"}
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

export default TechCrunch