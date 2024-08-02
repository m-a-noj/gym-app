import React from 'react'
import {Box} from '@mui/material';
import BodyParts from './BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const ScrollBar = ({data,bodyPart,setBodyPart}) => {
  return (
    <ScrollMenu>
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