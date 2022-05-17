import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { motion } from "framer-motion/dist/framer-motion";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [sign, setSign] = useState(false);
  const [fp, setFp] = useState(false);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(false);
  const container = {
    hidden: { opacity: 0, marginTop: "-1000px" },
    show: {
      opacity: 1,
      marginTop: "0px",
      transition: {
        delay: 0.8,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, margintop: "-1000px" },
    show: { opacity: 1, margintop: "0px" },
  };
  const register = (e) => {
    e.preventDefault();
    setDisable(true);
    if (password !== password2) {
      setDisable(false);
      return AlertDismissible("Passwords don't match");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setDisable(false);
            alert(error?.message);
          });
        // ...
      })
      .catch((error) => {
        setDisable(false);
        console.log(error);
        // ..
      });
  };
  const SignIn = (e) => {
    e.preventDefault();
    setDisable(true);
    if (email === "") {
      setDisable(false);
      return AlertDismissible("Please type in your email");
    }
    if (password === "") {
      setDisable(false);
      return AlertDismissible("Please type in your password");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        setDisable(false);
        alert(error.message);
      });
  };
  const handleReset = (e) => {
    e.preventDefault();
    forgotPassword(email);
  };
  const forgotPassword = (Email) => {
    if (Email === "") {
      return AlertDismissible("Please type in your email");
    }
    sendPasswordResetEmail(auth, Email)
      .then(function () {
        AlertDismissible("Please Check your email...");
        setTimeout(() => {
          setShow(false);
          window.location.reload();
        }, 2000);
      })
      .catch(function (e) {
        console.log(e);
      });
  };
  function AlertDismissible(words) {
    setText(words);
    setShow(true);
  }

  return (
    <div className="bg-dark">
      {!show && (
        <h1 className="text-white d-flex align-items-center justify-content-center ">
          Sh34 Store Admin
        </h1>
      )}
      <Alert className="absolute" show={show} variant="info">
        <Alert.Heading>Alert</Alert.Heading>
        <p>{text}</p>

        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
      <div className="bg-dark h-screen d-flex align-items-center justify-content-center text-white">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.Form variants={item} className="shadow p-5">
            {fp ? (
              <>
                <h1>Password Reset</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>{" "}
                <Button
                  variant="info"
                  className="w-100 my-3 text-white "
                  onClick={handleReset}
                  type="submit"
                >
                  Submit
                </Button>
              </>
            ) : (
              <>
                {" "}
                {sign ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                {sign && (
                  <>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="first name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="email" placeholder="first name" />
                    </Form.Group>
                  </>
                )}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                {sign && (
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </Form.Group>
                )}
                {sign ? (
                  <Button
                    variant="info"
                    className="w-100 my-3 text-white "
                    type="submit"
                    disabled={disable}
                    onClick={register}
                  >
                    {disable ? (
                      <Spinner size="sm" animation="border" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                ) : (
                  <Button
                    variant="info"
                    className="w-100 my-3 text-white "
                    onClick={SignIn}
                    disabled={disable}
                    type="submit"
                  >
                    {disable ? (
                      <Spinner size="sm" animation="border" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                )}
                <p className="text-muted">
                  {sign ? "Have an account?" : `Don't have an account?`}
                  {sign ? (
                    <span
                      className="text-info cursor"
                      onClick={() => setSign(false)}
                    >
                      {" "}
                      sign in
                    </span>
                  ) : (
                    <span
                      className="text-info cursor"
                      onClick={() => setSign(true)}
                    >
                      {" "}
                      sign up
                    </span>
                  )}
                </p>
                <p className="text-info cursor" onClick={() => setFp(true)}>
                  Forgot Password
                </p>
              </>
            )}
          </motion.Form>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
