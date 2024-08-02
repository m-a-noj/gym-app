import React from 'react';
import logo from "../assets/Logo.png"
import Stack from '@mui/material/Stack';



function Navbar() {
  return (
    <Stack px={"20px"} direction={'row'} justifyContent={'space-around'} sx={{gap:{sm:"124px",xs:"20px"},mt:{sm:"32px",xs:"20px"},justifyContent:"none"}}>
        <img src={logo} alt='logo' style={{width:"40px",height:"48px",margin:"20px,40px"}} />
        <Stack direction={'row'} sx={{gap:{xs:"30px"}}}  fontSize={24} alignItems={'flex-end'}>
         <a href='#Home'style={{textDecoration:"none",color:"#3A1212",borderBottom:"2px solid #FF2625"}}>Home</a>
          <a href='#exercise'style={{textDecoration:"none",color:"#3A1212"}}> Exercise</a>

        </Stack>
    </Stack>
  )
}

export default Navbar