import React from "react";
import { Image, Button } from 'react-bootstrap'
import mockup from '../images/BACKGROUND.svg'
import pizza from '../images/pizza.jpg'
import sandwich from '../images/sandwich.jpg'
import "./home.css"
import {LinkContainer} from 'react-router-bootstrap'
import Navigation from "../components/Navigation";
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="home-bg" >
      <Navigation />
      <div style={{"backgroundColor":"#131313", "padding":"0","margin-left":"50px","margin-right":"1px","height":"74vh", "margin-top":"0"}}>
        <div className="row-set">
          <div className="descrp"  style={{"border-top-right-radius":"230px", "padding-top":"5em"}} >
            <h1>LET US WET YOUR APPETITE...</h1>
            <div className="cta">
              <div className="img"><img src={pizza} alt="" /></div>
              <div className="img"><img src={ sandwich } alt="" /></div>
              <LinkContainer className='btn-cus' to='/products'><Button>More</Button></LinkContainer>
            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo, sit non maxime iure, 
            corporis quia distinctio illum asperiores maiores excepturi blanditiis dolor. 
            Quibusdam.
            </p>
          </div>
          <div style={{ "overflow-y":"hidden" }}>
            <Image src={mockup} fluid />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
