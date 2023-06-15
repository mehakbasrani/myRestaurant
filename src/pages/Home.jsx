import React from 'react'
import Layout from './../layout/Layout'
import { Link } from "react-router-dom";
import Banner from "../images/banner2.jpg";
import "../styles/HomeStyles.css";
//import Banner from '././'

function Home() {
  return (
    <Layout>
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
