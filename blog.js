import React from 'react'
import Image from "../Blogs/blog.jpg"
import "./blog.css"
import { motion } from "framer-motion" 
import { Card } from '@mui/material'
// import { useNavigate } from "react-router-dom"



import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Cover from '../CoverImage/cover';



// import blog7 from "../uiAssets/properclothing.jpg"



const Article = () => {

  
    const blg =[
      {id: 7, name:"It Is Very Important To Wear Proper Clothing"
       , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text' It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody Dummy texts have been in use by typesetters since the 16th century" ,imageurl: `${blog7}`},
      {id: 8, name:"Hollowed-Out Faces More Cuts Amid Virus" , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century " },
      {id: 9, name:"You Have To Wash Your Hands For 20 Seconds" , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th centur" },
      {id: 10, name:"A Researcher Is Research On Coronavirus In Lab " , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century" },
      {id: 11, name:"Comparing Nitrogen And Mechanical Freezer " , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century." },
      {id: 12, name:"Comparing Nitrogen And Mechanical Freezers" , desp: " This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century." },
    
    ]
    // const navigate =useNavigate();
  return (
    <>
    <section className='hero' style={{backgroundImage : `url (${Image})` }}
   
    >
    <div className='content'>
      <h1>Be Creative.</h1>
      <em>
   "Creativity is seeing what others see and thinking what no one else ever thought." </em> <br/> <em>Albert Einstein. ...</em>
    <a href='start' >Start Now</a>

    </div>
   
  
</section>
<div className='curve'>
      <svg viewBox="0 0 2880 90" >
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720  0 720 0H0V48Z" fill="currentColor"></path>
      </svg>
      </div>

      <div  className='container'>
   <motion.div 
   initial={{y: 0}}
   animate={{y :[100 ,0]}}
   transition={{duration: '1' , delay: '1'}}
   whileInView="visible">
   <h1>Blogs</h1>
   <p>See Our Interesting Blogs and stay Hygene</p>
      </motion.div>
      </div>

   
      <div className='cardcontainer'>
      {blg.map((i)=>(
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
          <Button sx={{ md:9 , ml: 16}} variant="contained" >View More</Button>
        
  
        </CardActions>
      </Card>
  
    
      ))}
        
      
      </div>
</>
  )
}

export default Article


