import React from 'react';
import {Box,Stack,Typography,Button} from "@mui/material"
import Herobannerimg from "../assets/banner.png"

export const HeroBanner = () => {
  return (
    <Box p={"20px"} sx={{mt:{lg:"170px",xs:"100px"}}} mt={"170px"} position={'relative'}>
        <Typography color={"#FF2625"} fontWeight={"600px"} fontSize={"26px"}>
            Fitness Club
        </Typography>
        <Typography fontWeight={600} fontSize={"35px"}>
            Sweat,Smile <br/> And Repeat
        </Typography>
        <Typography mb={3} sx={{fontSize:{lg:"22px",xs:"15px"}}} lineHeight={"35px"}>
            Check out the most effective exercise 
        </Typography>
        <Button variant='contained'>Explore Exercise</Button>
        <Typography color={"#FF2625"} fontSize={"200px"} sx={{opacity:0.1,
            display:{lg:'block',xs:'none'}
        }}>
            Exercise
        </Typography>
        <img src={Herobannerimg} alt='baneer' className='hero-banner-img'/>

    </Box>
  )
}
