import React from 'react'
import Layout from '../layout/Layout'
import { Box, Typography } from "@mui/material";

function About() {
  return (
    
      <Layout>
         <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        India has a rich culinary heritage. Indian cuisine has a 5000-year-old history. Mythological beliefs and traditions have 
        played an important role in its evolution and development. The main Indian food was based on Hinduism but the Islamic influence 
        during the Mughal era, the Persian exchanges with the Middle East and the British colonial system have all contributed immensely
       towards laying the foundation of the Indian cuisine.

        </p>
        <br />
        <p>
        India is a big country with many states and regions. Each region   offers a unique assortment of dishes and cooking techniques. 
        Each regional cuisine uses its own locally grown herbs, spices, fruits and vegetables. 
        These regional cuisines collectively combined together form the very delightful Indian Cuisine.
        </p>
        <br />
        <h6>Find all the cuisines at one stop in our restaurant</h6>
        <h6>Do visit and give it a try!</h6>
      </Box>
      </Layout>
    
  )
}

export default About
