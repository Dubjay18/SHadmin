import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./products.css";

const Apikey = "3c4feed6ffb84681b1652949ebada8ff";

function Product() {
  const [product, setProduct] = useState([]);
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [price, setPrice] = useState(0.5);
  let [loading, setLoading] = useState(true);
  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  const handleShow = () => setShow(true);
  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  let { id } = useParams();
  useEffect(() => {
    load();
    axios
      .get(`https://api.spoonacular.com/food/menuItems/${id}?apiKey=${Apikey}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, [id]);
  if (!product)
    return (
      <Button variant="warning" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="lg"
          role="status"
          aria-hidden="true"
        />
        <h3> Loading...</h3>
      </Button>
    );
  return (
    <div className="d-flex justify-content-center align-items-center cus-bg h-screen">
      <div className="p-5 rounded-md bg-white  shadow">
        {loading ? (
          <Button variant="warning" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="lg"
              role="status"
              aria-hidden="true"
            />
            <h3> Loading...</h3>
          </Button>
        ) : (
          <>
            {" "}
            <h1 className=" my-5 d-flex justify-content-center">
              Confirm Order
            </h1>
            <div className="">
              <img
                src={product?.image}
                alt="Sorry, not found"
                className="scale w-100"
              />
              <div className="d-md-flex my-2 align-items-center">
                {" "}
                <input
                  type="number"
                  className="p-1 number h-25 "
                  min="0"
                  max="9"
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                />
                <p className="my-4 mx-4">
                  {product?.title}
                  {num > 1 ? "(s)" : ""}
                </p>
                <Button variant="warning" onClick={handleShow}>
                  Confirm
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {num} {product?.title}
          {num > 1 ? "(s)" : ""}
          <br />${price * num}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Product;
