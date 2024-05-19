import { Box, styled } from '@mui/material';

export const WebDevAboutWrapper = styled(Box)({
    padding: '1.5% 12%',
    display: 'flex',
    '@media (max-width:900px)': {
        padding: '5%',
    }
})