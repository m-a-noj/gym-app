import React from 'react'
import Pagination from '@mui/material'
import {Box,Typography,Stack} from '@mui/material'
import ExerciseCard from './ExerciseCard'


const Exercise = ({ exercise }) => {
    
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      {exercise.map((exercises) => (
     
    <ExerciseCard exercise={exercises}></ExerciseCard>
))}
    </Stack>
    <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercise.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisesPerPage)}
            onChange={()=>{}}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercise