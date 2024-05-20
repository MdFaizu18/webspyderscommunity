import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { OrangeButton } from '../assets/wrapper/WebdevWrapper';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import portfolio from '../assets/images/portfolio.png'
import close from '../assets/images/close.png'
import linkedin from '../assets/images/linkedin.png'


export default function AdminDrawer({imgs,name,email,description,linkedinl,portfoliol}) {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        <Box sx={{bgcolor:'#FFA500',padding:'7%'}}>
        <Box sx={{cursor:'pointer'}}><img src={close} alt="" height={30} width={30} /></Box>
        <Typography variant='h5' textAlign={'center'} sx={{fontWeight:'600',color:'white'}}>Admin Info</Typography>
        <Box sx={{display:'flex',justifyContent:'center',marginTop:'5%',cursor:'pointer'}}>
            <img src={imgs} alt="" height={150} width={150}
            style={{borderRadius:'100px'}} />
        </Box>
        </Box>
            <Box sx={{
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding:"10% 5%",width:"100%",borderRadius:'10px',height:'60%',
                // backgroundColor:"#EEEEEE"
        }}>
         <Typography variant='h5' sx={{ fontWeight: "600",marginBottom:'2%' }}>Details :</Typography>
        <Box sx={{display:'flex',gap:"0px"}}>
        <Box flex={.22}>
            <Typography variant='body1' gutterBottom sx={{fontWeight:"600"}}>Name :</Typography>
            <Typography variant='body1' gutterBottom sx={{ fontWeight: "600" }}>Email   :</Typography>
            <Typography variant='body1' gutterBottom sx={{ fontWeight: "600" }}>About  :</Typography>
        </Box>
        <Box flex={1}>
                        <Typography variant='body1' gutterBottom  sx={{fontWeight:"600",color:'grey'}}>{name}</Typography>
                        <Typography variant='body1' gutterBottom  sx={{ fontWeight: "600",color:'grey' }}>{email}</Typography>
                        <Typography variant='body1' gutterBottom sx={{ fontWeight: "600", color: 'grey' }}>{description} </Typography>

        </Box>

           
        </Box>
        <Box sx={{display:'flex',gap:'20px'}}>
            <Typography variant='h5' sx={{ fontWeight: "600",margin:'5% 0% 2% 0%' }}>  
                    More Info :
            </Typography>
        </Box>
        <Box sx={{display:'flex',gap:'20px'}}>
            <Box>  
                        <a href={linkedinl} target='_blank'>
                      <img src={linkedin} alt="linkedin" height={35} width={35} style={{marginTop:'2px'}} />
            </a>
            </Box>
            { portfoliol!="null" &&
            <Box>  
                        <a href={portfoliol}  target='_blank'>
                     <img src={portfolio} alt="portfolio" height={35} width={35} />
            </a>
            </Box>
            }
        </Box>
        </Box>
        <Box sx={{bgcolor:"#FFA500",height:'100px'}}>
         <Typography variant="h5"></Typography>
        </Box>

         <Divider/>
         {/* <Box sx={{bgcolor:'#EEEEEE'}}>hihi
         </Box>  */}
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <OrangeButton
                 onClick={toggleDrawer('right', true)}
                 sx={{  }}
                 >Admin Info</OrangeButton>
                <Drawer
                    anchor='right'
                    open={state.right}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
