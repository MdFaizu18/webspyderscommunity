import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar,Box,Button,Toolbar, Typography} from '@mui/material'
import { AppBarWrapper, NavbarWrapper } from '../assets/wrapper/NavbarWrapper';

const Navabar = () => {
  return (
    <>
    <Box>
              <AppBarWrapper position="static">
                  <Toolbar>        
                      <Typography variant="h5" component="div"
                       sx={{ flexGrow: 1,
                       color:'white',
                       fontWeight:'600',marginLeft:"5%",
                       cursor:'pointer'
                       }}>
                         WebSpyders
                      </Typography>
                      <Box>
                      <Button component={Link} to="/" color="inherit">Home</Button>
                      <Button component={Link} to="/about" color="inherit">About</Button>
                      <Button component={Link} to="/new-updates" color="inherit">New Updates</Button>
                      </Box>
                  </Toolbar>
              </AppBarWrapper>
    </Box>

   
        
    </>
  )
}

export default Navabar