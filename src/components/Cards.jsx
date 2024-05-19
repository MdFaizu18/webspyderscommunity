import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { OrangeButton } from '../assets/wrapper/WebdevWrapper';

const Cards = ({ img, admin, group ,admin2 ,description}) => {
    return (
        <>
            <Card sx={{
                minWidth: 305,
                height: 380,
                borderRadius: 2,
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;"
            }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt={`${group} image`}
                />
                <CardHeader
                    title={group}
                    subheader={`Admin: ${admin}`}
                    titleTypographyProps={{ variant: 'h6', color: 'primary', fontWeight: 'bold' }} // Customize title text here
                    subheaderTypographyProps={{ variant: 'subtitle2', color: 'grey' ,fontWeight:"bold"}} // Customize subheader text here

                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontWeight:'500'}}>
                        {description}
                    </Typography>
                    {/* <OrangeButton>Join</OrangeButton> */}
                </CardContent>
            </Card>
        </>
    );
}

export default Cards;
