import React from "react";
import { Col, Row } from "react-bootstrap";
import BarChartNew from "../components/BarChartNew";
import MyChart from "../components/MyChart";
import Nav from "../components/Nav";
import PieNew from "../components/PieNew";
import { motion } from "framer-motion/dist/framer-motion";

import { useStateValue } from "./../stateProvider";
function Home({ handleShow }) {
  const container = {
    hidden: { opacity: 0, x: "100vw" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.5,
        delayChildren: 0.1,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        delay: 0.1,
        delayChildren: 0.1,
        stiffness: 150,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, margintop: "-1000px" },
    show: { opacity: 1, margintop: "0px" },
  };

  return (
    <motion.div
      variants={container}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
      className="w-100"
    >
      <div className="p-3 shadow w-100 d-flex justify-content-between align-items-center">
        <h4>Dashboard</h4>
        <h5 className="d-md-none" onClick={handleShow}>
          Menu
        </h5>
      </div>
      <div>
        <Row className="mx-2">
          <Col md={6}>
            <div className="p-4 my-5 bg-black shadow rounded-lg">
              <MyChart />
            </div>
          </Col>
          <Col md={6}>
            <div className="p-4 my-5 bg-black shadow rounded-lg">
              <BarChartNew />
            </div>
          </Col>
        </Row>
        <Row className="mx-2">
          <Col md={6}>
            <div className="p-1  bg-black shadow rounded-lg">
              <PieNew />
            </div>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
}

export default Home;
