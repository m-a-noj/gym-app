import React, { useState } from 'react';
import { Box } from '@mui/material';
import { HeroBanner } from './HeroBanner';
import SearchExercise from './SearchExercise';
import Exercise from './Exercise';

function Home() {
  const [exercises,setExercise]=useState([]);
  const [bodyPart,setBodyPart]=useState([])
  return (
    <Box>
     <HeroBanner/>
     <SearchExercise bodyPart={bodyPart} setExercise={setExercise} setBodypart={setBodyPart}/>
     <Exercise bodyPart={bodyPart} setExercise={setExercise} setBodypart={setBodyPart}/>
    </Box>
  )
}

export default Home