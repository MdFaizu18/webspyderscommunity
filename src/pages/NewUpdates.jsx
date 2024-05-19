import React from 'react'
import Navabar from '../components/Navabar'
import { Box, Typography } from '@mui/material'
  import img from '../assets/images/noupdates.jpg'

const NewUpdates = () => {
  return (
    <>
    <Navabar/>
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'8%'}}>
        <Box>
            <img src={img} alt="" height={300} width={400}/>
        </Box>
        <Box>
         <Typography variant='h4'>No updates to fetch</Typography>
        </Box>
    </Box>
    </>
  )
}

export default NewUpdates