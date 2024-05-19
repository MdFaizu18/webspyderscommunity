import {Box,styled} from '@mui/material';

export const WebDevMainWrapper = styled(Box)({
    padding:'1.5% 12%',
    display:'flex',
    '@media (max-width:900px)': {
        padding:'5%',
       
    }

})
export const WebDevSecondWrapper = styled(Box)({
    padding:'4% 12% 1.5% 12%',
    width:'100%',
    flexDirection:'column',
    display:'flex',
    '@media (max-width:900px)': {
        padding:'5%',
       
    }

})

export const OrangeButton = styled(Box)({
    cursor: 'pointer',
    backgroundColor: '#FFA500',
    color: 'white',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: '600',
    fontFamily: 'sans-serif',
    width: '170px',
    height: '40px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1% 4%',
    boxShadow: ' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'

})