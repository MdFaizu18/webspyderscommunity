import React from 'react'
import Navabar from '../../components/Navabar'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { OrangeButton, WebDevMainWrapper, WebDevSecondWrapper } from '../../assets/wrapper/WebdevWrapper'
import AdminDrawer from '../../components/AdminDrawer'
import img from '../../assets/images/noupdates.jpg'
import Chrisimg from '../../assets/images/christober.png'


const CloudDevops = () => {

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
            href="/cloud-devops"
            aria-current="page"
          >
           Cloud-DevOps
          </Link>
        </Breadcrumbs>
      </Box>
      <WebDevMainWrapper>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography variant='h4' sx={{ fontWeight: '600' }}>Welcome to Cloud & DevOps💡  </Typography>

          <Typography variant='h4' textAlign={"center"} sx={{ fontFamily: 'Cedarville Cursive', fontWeight: '600', color: '#ffa500', margin: '2% 0' }}>"Cloud computing is all about how you do computing not where you do computing”</Typography>
          <Typography variant='body1' sx={{ '@media (max-width:900px)': { textAlign: 'justify' } }}>
            Join the Web Spyders Community, a vibrant hub for cloud computing enthusiasts and professionals! Here, we share and exchange knowledge on all aspects of cloud computing, from foundational concepts to advanced practices in AWS, Azure, and Google Cloud Platform. Our community is designed to help you stay updated with the latest cloud trends, discover new tools and services, and enhance your cloud architecture and deployment skills.

            Engage in exciting discussions, participate in collaborative projects, and access exclusive tutorials and resources. Whether you're a newbie looking to learn the basics or a seasoned expert eager to share your expertise, Web Spyders offers something for everyone. Dive into the world of cloud challenges, migration projects, and webinars hosted by industry experts. Let's innovate and build scalable solutions in the cloud together!
          </Typography>


          <Box sx={{ display: 'flex', gap: '20px' }}>
            {/* for admin info  */}
            <AdminDrawer
              imgs={Chrisimg}
              name={"Christober"}
              email={"christober2907@gmail.com"}
              description={"Passionate Cloud Engineer with expertise in building scalable and secure cloud solutions. Always eager to learn and explore new cloud technologies to optimize performance and deliver robust applications."}
              linkedinl={"https://www.linkedin.com/in/christobers/"}
              portfoliol={'/chris'}
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

export default CloudDevops
