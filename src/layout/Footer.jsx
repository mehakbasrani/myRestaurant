import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
      <>
    <Box
    sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
  >
    <Box
      sx={{
        my: 3,
        "& svg": {
          fontSize: "60px",
          cursor: "pointer",
          mr: 2,
        },
        "& svg:hover": {
          color: "goldenrod",
          transform: "translateX(5px)",
          transition: "all 400ms",
        },
      }}
    >
          {/* icons */}
          <Link to = "https://www.instagram.com/rifff__life__23/">
          
          </Link>
          
          <a href="https://www.instagram.com/rifff__life__23/" style ={{color: "white"}}>
            <InstagramIcon /> 
          </a>
          
          
          <a href="https://github.com/mehakbasrani" style ={{color: "white"}}>
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mehak-basrani-b444941a4/" style ={{color: "white"}}>
            <LinkedInIcon />
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; {date}
        </Typography>
      </Box>
    </>
  )
}

export default Footer
