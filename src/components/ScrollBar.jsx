import React, { useContext } from 'react'
import {Box, Typography} from '@mui/material';
import BodyParts from './BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Right from "../assets/right-arrow.png";
import Left from "../assets/left-arrow.png"


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={Left} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={Right} alt="right-arrow" />
    </Typography>
  );
};

 


const ScrollBar = ({data,bodyPart,setBodyPart}) => {


  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item)=><Box 
        key={item.id || item}
        title={item.id || item}
        itemID={item.id || item}
        m="0,40px">
           <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}></BodyParts>

    </Box>)}</ScrollMenu>
  )
}

export default ScrollBar;