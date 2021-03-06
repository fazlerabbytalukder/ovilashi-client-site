import React from 'react';
import { Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StarRatings from 'react-star-ratings';



const Review = (props) => {
    const { name, review, star, img } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, height: '145px', border: 0, boxShadow: 2 }}>
                <Box style={{display:'flex', justifyContent:'spaceBetween', alignItems:'center'}}>
                    <Box style={{textAlign: 'left', marginTop: '10px', marginBottom: '10px', border:'2px solid gray', padding:'10px', borderRadius:'25px 0 25px 0', marginLeft:'10px' }}>
                        <CardMedia
                            component="img"
                            style={{ width: '50px', borderRadius: '5%' }}
                            image={img}
                            alt="your img"
                        />
                        <Box sx={{ }}>
                            <Typography variant="body2" sx={{ fontSize: 14, color: '#8A513D', fontWeight: 400 }} >
                                {name}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                <i style={{ color: '#8A513D', margin: '5px' }} class="fas fa-quote-left fa-1x"></i>
                                {review}
                                <i style={{ color: '#8A513D', margin: '5px' }} class="fas fa-quote-right fa-1x"></i>
                            </Typography>
                        </CardContent>
                        <Rating name="read-only" value={parseFloat(star)} readOnly />
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
};

export default Review;