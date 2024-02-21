import React from 'react'

import "./style.css"
import { motion } from "framer-motion"




const Cover    = () => {
  return (
    <>
<div ClassName='image'  >
<motion.div initial ={{x:0}}
animate={{x:[400,0]}}
transition={{ repeat: 0, duration: 2, delay:0.1}}>
    <h1>    Welcome to our Department Page</h1>
    <em>Examples of cleaness is Right Here...</em>
    </motion.div>
</div>

</> 
  )
}


export default Cover





