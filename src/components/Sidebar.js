import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const container = {
    hidden: { opacity: 0, marginLeft: "-100px" },
    show: {
      opacity: 1,
      marginLeft: "0px",
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className=" h-100 px-5 py-4 bg-black d-flex flex-column"
      >
        <div className="p-4">
          {" "}
          <motion.h5
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
            variants={item}
          >
            <Link to={"/"} className="text-white link px-4 py-5">
              Home
            </Link>
          </motion.h5>
        </div>

        <div className="p-4">
          <motion.h5
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
            variants={item}
          >
            <Link to={"/products"} className="text-white link px-4 py-5">
              Products
            </Link>
          </motion.h5>
        </div>
        <div className="p-4">
          <motion.h5
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
            variants={item}
          >
            <Link to={"/clients"} className="text-white link px-4 py-5">
              Clients
            </Link>
          </motion.h5>
        </div>
        <motion.div variants={item} className="p-4  mt-auto">
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-outline-light"
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Sidebar;
