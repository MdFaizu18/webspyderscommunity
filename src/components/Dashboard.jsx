import React from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { MainBoxWrapper } from '../assets/wrapper/DashboardWrapper';
import webImg from '../assets/images/web-dev.jpg';
import aiImg from '../assets/images/ai.jpg';
import cyberImg from '../assets/images/cybers.jpg';
import supportImg from '../assets/images/support.jpg';
import cloudImg from '../assets/images/devops.png';
import javaImg from '../assets/images/java1.jpeg';
import techImg from '../assets/images/tech.jpeg';
import { animateScroll as scroll } from 'react-scroll'; // Corrected import statement
// import { Link, Element } from 'react-scroll';

import Footer from './Footer';

const Dashboard = () => {
  const handleLinkClick = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <MainBoxWrapper>
        <Box component={Link} to='/tech-crunch' onClick={handleLinkClick} sx={{ textDecoration: 'none' }}>
          <Cards
            img={techImg}
            group="Tech Crunch"
            admin="Theja Ashwin , Athesh Pargau"
            description="Tech Crunch is the leading tech media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news."
          />
        </Box>

        <Box component={Link} to='/web-dev' onClick={handleLinkClick} sx={{ textDecoration: 'none' }}>
          <Cards
            img={webImg}
            group="Web Dev"
            admin="Mohammed Faizulla"
            description="Web Dev group focuses on all aspects of web development, from front-end to back-end, ensuring a comprehensive understanding of web technologies."
          />
        </Box>

        <Box component={Link} to='/ai-avenue' onClick={handleLinkClick} sx={{ textDecoration: 'none' }}>
          <Cards
            img={aiImg}
            group="AI Avenue"
            admin="Srihari"
            description="AI Avenue explores the latest in artificial intelligence, machine learning, and neural networks, bringing insights into cutting-edge technologies."
          />
        </Box>

        <Box component={Link} to='/cyber-bytes' onClick={handleLinkClick} sx={{ textDecoration: 'none' }}>
          <Cards
            img={cyberImg}
            group="Cyber Bytes"
            admin="Athesh Pargau"
            description="Cyber Bytes delves into cybersecurity, covering everything from basic security practices to advanced threat detection and response."
          />
        </Box>

        <Box component={Link} to='/java-dsa' onClick={handleLinkClick} sx={{ textDecoration: 'none' }}>
          <Cards
            img={javaImg}
            group="Java & DSA"
            admin="Hariharan"
            description="Java & DSA group is dedicated to mastering Java programming and data structures and algorithms, essential for building efficient software."
          />
        </Box>

        <Box component={Link} to='/cloud-devops' onClick={handleLinkClick} sx={{ textDecoration: 'none' }}>
          <Cards
            img={cloudImg}
            group="Cloud & DevOps"
            admin="Chirstober"
            description="Cloud & DevOps group focuses on cloud computing platforms and DevOps practices, aiming to streamline and automate development workflows."
          />
        </Box>

        <Cards
          img={supportImg}
          group="Support"
          admin="Mohammed Faizulla"
          description="Support group provides assistance and resources for troubleshooting and resolving technical issues, ensuring smooth operations."
        />
      </MainBoxWrapper>
    </>
  );
};

export default Dashboard;
