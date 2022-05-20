import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { List } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
function Products({ handleShow }) {
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
        <h4>Products</h4>
        <Button variant="light" className="d-md-none" onClick={handleShow}>
          <List />
        </Button>
      </div>

  

    </motion.div>
  );
}

export default Products;
