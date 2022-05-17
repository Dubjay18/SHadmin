import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
function Clients({ handleShow }) {
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
  return (
    <motion.div
      variants={container}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
      className="w-100"
    >
      <div className="p-3 shadow w-100 d-flex justify-content-between align-items-center">
        <h4>Clients</h4>
        <h5 className="d-md-none" onClick={handleShow}>
          Menu
        </h5>
      </div>
      Clients
    </motion.div>
  );
}

export default Clients;
