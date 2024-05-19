import React from 'react'
import Navabar from '../../components/Navabar'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { OrangeButton, WebDevMainWrapper, WebDevSecondWrapper } from '../../assets/wrapper/WebdevWrapper'
import AdminDrawer from '../../components/AdminDrawer'
import img from '../../assets/images/noupdates.jpg'
import atheshImg from '../../assets/images/athesh.png'


const CyberBytes = () => {

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
                        href="/cyber-bytes"
                        aria-current="page"
                    >
                        Cyber-Bytes
                    </Link>
                </Breadcrumbs>
            </Box>
            <WebDevMainWrapper>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Typography variant='h4' sx={{ fontWeight: '600' }}>Welcome to Cyber Bytes🧑‍💻  </Typography>

                    <Typography variant='h4' textAlign={"center"} sx={{ fontFamily: 'Cedarville Cursive', fontWeight: '600', color: '#ffa500', margin: '2% 0' }}>“For every lock, there is someone out there trying to pick it or break in”</Typography>
                    <Typography variant='body1' sx={{ '@media (max-width:900px)': { textAlign: 'justify' } }}>
                        Join the Web Spyders Community, a vibrant hub for cybersecurity enthusiasts and professionals! Here, we share and exchange knowledge on all aspects of cybersecurity, from basic security principles to advanced topics like penetration testing, threat intelligence, and ethical hacking. Our community is designed to help you stay updated with the latest security trends, discover new tools and techniques, and enhance your defensive and offensive security skills.

                        Engage in exciting discussions, participate in collaborative projects, and access exclusive tutorials and resources. Whether you're a newbie looking to understand the fundamentals or a seasoned professional eager to share your insights, Web Spyders offers something for everyone. Dive into the world of security challenges, CTF competitions, and webinars hosted by industry leaders. Let's secure the digital world together!
                    </Typography>


                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        {/* for admin info  */}
                        <AdminDrawer
                            imgs={atheshImg}
                            name={"Athesh Pargau"}
                            email={"atheshpargau7x@gmail.com"}
                            description={"Passionate Cybersecurity Specialist and Blockchain Developer with a knack for identifying vulnerabilities, securing systems, and building decentralized applications. Always eager to learn and implement the latest technologies to protect data and create transparent, secure solutions."}
                            linkedinl={"https://www.linkedin.com/in/athesh-pargau-r-a533801b4/"}
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

export default CyberBytes