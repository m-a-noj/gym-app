import React from 'react'
import { Stack,Typography } from '@mui/material';
import icon from '../assets/gym.png';


const BodyParts = ({item,setBodypart,BodyPart}) => {
  return (
    <Stack type="button"
    alignItems={'center'}
    justifyContent={'center'}
    className='bodyPart-card'
    sx={{
        borderTop: BodyPart === item ? '4px solid #ff2625':'',
        backgroundColor:'#fff',
        height:'270px',
        width:'270px',
        cursor:'pointer',
        gap:'47px'
    }}
    >
        <img src={icon} alt='dumbell' style={{width:'40px',height:'40px'}}/>
        <Typography>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyParts