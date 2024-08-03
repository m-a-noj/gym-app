import React, { useState } from 'react';
import { Box } from '@mui/material';
import { HeroBanner } from './HeroBanner';
import SearchExercise from './SearchExercise';
import Exercise from './Exercise';

function Home() {
  const [exercise,setExercise]=useState([]);
  const [bodyPart,setBodyPart]=useState('all')
  return (
    <Box>
     <HeroBanner/>
     <SearchExercise bodyPart={bodyPart} setExercise={setExercise} setBodyPart={setBodyPart}/>
     <Exercise bodyPart={bodyPart} exercise={exercise} setExercise={setExercise}/>
    </Box>
  )
}

export default Home