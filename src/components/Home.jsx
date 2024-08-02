import React, { useState } from 'react';
import { Box } from '@mui/material';
import { HeroBanner } from './HeroBanner';
import SearchExercise from './SearchExercise';
import Exercise from './Exercise';

function Home() {
  return (
    <Box>
     <HeroBanner/>
     <SearchExercise/>
     <Exercise/>
    </Box>
  )
}

export default Home