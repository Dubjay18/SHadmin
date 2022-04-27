import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./About.css";
function About() {
  return (
    <div>
      <Navigation />{" "}
      <div className="about">
        <div className="main">
          <div className="desc my-5">
            <h1 className="d-flex justify-content-center">About Us</h1>
            <p>
              Jay's Eats is a fast-growing chain of restaurants that keeps
              culture and creativity at the heart of everything we do. Our
              mission is to provide our customers with the ultimate cuisine
              experience by utilizing the expertise of our world-class personnel
              and state-of-the-art equipment and top-tier ingredients. We
              guarantee that every bite is a refreshing experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
