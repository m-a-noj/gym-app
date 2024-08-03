import React,{useEffect,useState} from 'react';
import {Box,Stack,Button,TextField,Typography} from "@mui/material";
import { fetchData,exerciseOptions } from '../utils/fetchData';
import ScrollBar from './ScrollBar';


const SearchExercise = ({setExercise,bodyPart,setBodyPart}) => {
  const [search,setSearch] = useState("");
 
  const[bodyParts,setBodyparts]=useState([])
  
  useEffect(()=>{const fetchExercisesData=async ()=>{
    const bodypartsdata= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    setBodyparts(['all',...bodypartsdata]);

  }
fetchExercisesData();},[])
  const handleSearch =async()=>{
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      const searchedExercise = exerciseData.filter((exercise)=>exercise.name.toLowerCase().includes(search)||exercise.equipment.toLowerCase().includes(search)||
      exercise.target.toLowerCase().includes(search)||
      exercise.bodyPart.toLowerCase().includes(search)
    )
    setSearch("");
    setExercise(searchedExercise)

    }

  }
  return (
    <Stack justifyContent={'center'} alignItems={'center'} mt={"120px"}>
      <Typography fontWeight={700} sx={{
        fontSize:{lg:"44px",xs:"30px"},
        mb:"50px", textAlign:"center"
      }}>
        Awesome Exercise You <br></br>
        Should Know
      </Typography>
      <Box>
        <TextField
        sx={{width:{lg:"800px",xs:"300px"}}}
         value={search}
         
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercise'
        type='text' ></TextField>
        <Button
        onClick={handleSearch}
        variant='contained' sx={{
          width:{lg:"225px",xs:"80px"},
          fontSize:{lg:"20px",xs:"14px"},
          height:"56px",
          borderRadius:"0px"
          

        }}>Search</Button>
      </Box>
      <Box sx={{
        position:'relative',width:'100%',p:'20px'
      }}>
        <ScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        
      </Box>
    </Stack>
  )
}

export default SearchExercise