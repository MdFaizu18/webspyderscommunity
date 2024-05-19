import {Box,styled} from '@mui/material';

export const MainBoxWrapper = styled(Box)({
    width:"100%",
    display:'grid',
    gridTemplateColumns:"1fr 1fr 1fr",
    gridGap:"10px",
    padding:'5% 12% 0 12%',
    gap:'5%',
    '@media (max-width:900px)':{
        padding: '15% 12% 0 12%',
        gridTemplateColumns:"1fr",
        gap: '1.5%',
    }
})