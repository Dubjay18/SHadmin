import { signOut } from "firebase/auth";
import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../stateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
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
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "SET_UID",
          uid: null,
        });
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className=" h-100 px-md-5 px-2 py-4 bg-black d-flex flex-column"
      >
        <div className="p-4">
          {" "}
          <motion.h3
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.4 },
            }}
            variants={item}
            className="w-50 text-white"
          >
            Welcome, {user}
          </motion.h3>
        </div>
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
            <Link to={"/"} className="text-white link px-md-4 px-2 py-5">
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
            <Link
              to={"/products"}
              className="text-white link px-md-4 px-2 py-5"
            >
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
            <Link to={"/clients"} className="text-white link px-md-4 px-2 py-5">
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
            onClick={logOut}
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Sidebar;
