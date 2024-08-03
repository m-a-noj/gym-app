import React from 'react'
import { Stack,Typography } from '@mui/material';
import icon from '../assets/gym.png';



const BodyParts = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack
   
     type="button"
    alignItems={'center'}
    justifyContent={'center'}
    className='bodyPart-card'
    sx={{
        borderTop:bodyPart === item ? '4px solid #ff2625':'',
        backgroundColor:'#fff',
        height:'270px',
        width:'270px',
        cursor:'pointer',
        gap:'47px',
       
    }}
    onClick={()=>{setBodyPart(item)
      window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
    >
        <img src={icon} alt='dumbell' style={{width:'40px',height:'40px'}}/>
        <Typography>
            {item.toUpperCase()}
        </Typography>
    </Stack>
  )
}

export default BodyParts