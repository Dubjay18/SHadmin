import React from "react";
import { Image, Button } from "react-bootstrap";
import mockup from "../images/BACKGROUND.svg";
import pizza from "../images/pizza.jpg";
import sandwich from "../images/sandwich.jpg";
import "./home.css";
import { LinkContainer } from "react-router-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-bg">
      <Navigation />
      <div
        style={{
          backgroundColor: "#131313",
          padding: "0",

          "margin-right": "1px",

          "margin-top": "0",
        }}
        className="prime-home"
      >
        <div className="row-set">
          <div
            className="descrp"
            style={{ "border-top-right-radius": "230px", "padding-top": "5em" }}
          >
            <h1 className="home-h1">LET US WET YOUR APPETITE...</h1>
            <div className="cta">
              <div className="img">
                <img src={pizza} alt="" />
              </div>
              <div className="img">
                <img src={sandwich} alt="" />
              </div>
              <LinkContainer className="btn-cus" to="/products">
                <Button variant="warning">More</Button>
              </LinkContainer>
            </div>
            <p>
              Our food is served at the table to have a comfortable visit for
              your meals. The restaurant offers a menu with various options for
              your meal, to choose from.
              <br />
              <br />
              <ul>
                <li>
                  Our Restaurants provide you with different cuisines of food to
                  satisfy your hunger. • Our The restaurant is a life savior
                  when one doesn’t feel like cooking or wants to eat something
                  else.
                </li>
                <li>
                  The food preparation and presentation gives you a happy feel
                  during your dull • The ambiance that a restaurant provides you
                  with gives one more reason to visit to cherish their time.
                </li>
                <li>
                  You get to explore places when you plan to visit a restaurant.{" "}
                </li>
                <li>
                  The fast-food restaurant provides your meals on the go to save
                  your time at affordable prices.
                </li>
              </ul>
            </p>
          </div>
          <div style={{ "overflow-y": "hidden" }}>
            <Image src={mockup} fluid />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
