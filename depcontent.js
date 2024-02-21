import React from 'react'
import "./cards.css"
import { Card } from '@mui/material'
import { motion } from "framer-motion"


// import Cover from '/src/components/CoverImage/cover'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cover from '../CoverImage/cover';
// import  Cover from "./cover"
import Grid from "@mui/material/Grid"
// import style from "./cards.css"

// import Image from '/src/components/uiAssets/emergency.jpg'


const Depcontent = () => {
  const dep =[
    {id: 1, image:'../../uiAssets/emergency.jpg', name:"Accident and Emergency" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
    {id: 2, name:"Anaesthesiology" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
    {id: 3, name:"Cardic Surgery" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
    {id: 4, name:"Clinical Biochemistry" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
    {id: 5, name:"Dermatology" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
    {id: 6, name:"Haematology and bloodbank" , desp: " Lizards are a widespread group of squamate reptiles, with over  species across all continents except Antarctica" },
  
  ]

  return (
   <>
   <Cover/>
    
   
    <div className='shape'>
      <svg viewBox="0 0 2880 90" >
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720  0 720 0H0V48Z" fill="currentColor"></path>
      </svg>
      </div>
     
   <motion.div className='container'
   initial={{y: 0}}
   animate={{y :[100 ,0]}}
   transition={{duration: '1' , delay: '1'}}
   whileInView="visible">
   <h1>Departments </h1>
   <p>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
      </motion.div>
      
      
     <Grid> 
      <div className='cardcontainer'>
      {dep.map((i)=>(
        // <Motion.div initial={{x:0}}>
        <Card sx={{ maxWidth: 445, lg: 3, sm :6 , sx: 12 , md: 5 ,ml: 4 , mb:10}}>
        <CardMedia  
          sx={{ height: 140 }}
          // image="/src/components/uiAssets/emergency.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {i.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {i.desp}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          {/* <Button size="small">Read More</Button> */}
          {/* <Button variant="contained">Share</Button> */}
          <Button sx={{ md:9 , ml: 16}} variant="contained">View More</Button>
        
  
        </CardActions>
      </Card>
  
    
      ))}
        
      
      </div>
      
      </Grid>
      </>
      )
}
     
      



export default Depcontent
