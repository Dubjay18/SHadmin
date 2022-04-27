import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import bannerImg from "../images/Rectangle 10.png";
import delImg from "../images/Rectangle 22.png";
import eatImg from "../images/Rectangle 21.png";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./products.css";
const Apikey = "3c4feed6ffb84681b1652949ebada8ff";
function Products() {
  const [pies, setPies] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [pizza, setPizza] = useState([]);

  const [eatin, setEatin] = useState(false);
  const [delivery, setDelivery] = useState(false);

  const selectEatin = () => {
    setEatin(!eatin);
    setDelivery(false);
  };
  const selectDel = () => {
    setEatin(false);
    setDelivery(!delivery);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/food/menuItems/search?apiKey=${Apikey}&query=pie&number=10`
      )
      .then((res) => setPies(res.data.menuItems));
    axios
      .get(
        `https://api.spoonacular.com/food/menuItems/search?apiKey=${Apikey}&query=burger&number=10`
      )
      .then((res) => setBurgers(res.data.menuItems));
    axios
      .get(
        `https://api.spoonacular.com/food/menuItems/search?apiKey=${Apikey}&query=pizza&number=10`
      )
      .then((res) => setPizza(res.data.menuItems));
  }, []);

  return (
    <div className="cus-bg">
      <Navigation />
      <div className="banner">
        <img
          src={bannerImg}
          alt=""
          height={"200px"}
          width={"100%"}
          className="banner"
        />
        <h1 className="d-flex justify-content-center my-5 text-white">
          TODAY'S SPECIAL
        </h1>
        <div className="d-md-flex mx-5 p-lg-5 py-4 justify-content-center ">
          <img src={pizza[2]?.image} alt="" height={" "} className="w-lg-100" />
          <div className="d-lg-flex p-md-5 pt-5 align-items-center">
            <h4 className="p-lg-3 text-white my-4">{pizza[2]?.title}</h4>
            <Link
              className="btn btn-outline-light "
              to={`/product/${pizza[2]?.id}`}
            >
              <h5>ORDER</h5>
            </Link>
          </div>
        </div>
        <div
          className="bg-white  mb  clip-bg"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 0, 100% 78%, 58% 88%, 0 100%, 0 0)",
            paddingBottom: "1000px!important",
          }}
        >
          <h5 className="mb">YOUR PREFERENCE...</h5>
          <Row>
            <Col md={5}>
              <div
                className={
                  eatin
                    ? "cus-bg d-lg-flex  rounded-md p-4 selected pointer"
                    : "cus-bg d-lg-flex shadow-lg rounded-md p-4 pointer"
                }
                onClick={selectEatin}
              >
                <div>
                  <img src={eatImg} alt="..." width={"100%"} />
                </div>
                <div className="p-3 text-white">
                  <h4>Eat in</h4>
                  <br />
                  <br />
                  <h4>BOOK YOURSELF A TABLE</h4>
                </div>
              </div>
            </Col>
            <Col md={2} className="d-flex justify-content-center ">
              <h5 className=" my-5">OR</h5>
            </Col>
            <Col md={5}>
              <div
                className={
                  delivery
                    ? "cus-bg d-lg-flex  rounded-md p-4 selected pointer"
                    : "cus-bg d-lg-flex shadow-lg rounded-md p-4 pointer"
                }
                onClick={selectDel}
              >
                <div className="p-3 text-white">
                  <h4>DELIVERY</h4>
                  <br />
                  <br />
                  <h4>PLACE YOUR ORDER AND HAVE IT DELIVERED</h4>
                </div>
                <div>
                  <img src={delImg} alt="" width={"100%"} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <h1 className="d-flex justify-content-center my-5 text-white">
          Our Menu
        </h1>
        <Row className="mx-3 cus-bg" md={3}>
          {pies.map((e, i) => {
            return (
              <Col key={i} md={4} sm={6} className="over">
                <div
                  class="card mb-3 shadow p-3 "
                  style={{ maxWidth: "540px" }}
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                      <img
                        src={e.image}
                        className="img-fluid rounded-start"
                        alt="..."
                        width={"100%"}
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h5 className="card-title my-5">{e.title}</h5>

                        <Link
                          to={`/product/${e.id}`}
                          className="btn btn-outline-primary"
                        >
                          ORDER
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
          {burgers.map((e, i) => {
            return (
              <Col key={i} md={4} sm={6} className="over">
                <div
                  class="card mb-3 shadow p-3 "
                  style={{ maxWidth: "540px" }}
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                      <img
                        src={e.image}
                        className="img-fluid rounded-start"
                        alt="..."
                        width={"100%"}
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h5 className="card-title my-5">{e.title}</h5>

                        <Link
                          to={`/product/${e.id}`}
                          className="btn btn-outline-primary"
                        >
                          ORDER
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
          {pizza.map((e, i) => {
            return (
              <Col key={i} md={4} sm={6} className="over">
                <div
                  class="card mb-3 shadow p-3 "
                  style={{ maxWidth: "540px" }}
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                      <img
                        src={e.image}
                        className="img-fluid rounded-start"
                        alt="..."
                        width={"100%"}
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h5 className="card-title my-5">{e.title}</h5>

                        <Link
                          to={`/product/${e.id}`}
                          className="btn btn-outline-primary"
                        >
                          ORDER
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
