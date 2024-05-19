import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <>
    <Box sx={{background:"#ccc",height:'60px'}}>
              <Typography variant='body1' sx={{ fontWeight: 600, textAlign: 'center', padding: "1% 0 0 0" }}>&copy; {year} WebSpyders. Made by {" "} 
                  <a href="https://portfolio-4www.onrender.com/">Faizu</a>
        </Typography>
    </Box>
    </>
  )
}

export default Footer