import React from 'react'
import Navabar from '../components/Navabar'
import Dashboard from '../components/Dashboard'
import { Box } from '@mui/material'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
    <Box sx={{marginBottom:'15%'}}>
    <Navabar/>
    <Dashboard/>
    </Box>
      <Footer />
    </>
  )
}

export default LandingPage