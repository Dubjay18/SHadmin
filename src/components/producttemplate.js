import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function Template() {
    const [products, setProducts] = useState([]);
    const url = "https://fakerapi.it/api/v1/products?_quantity=1"

    const fetchPost = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data.data);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <Card bg='dark'style={{width: '28rem'}}>
            <Card.Body>
                {products.map((item,i) => (
                    <ListGroup variant="flush" key={i}> 
                        <ListGroupItem>Product Name: {item.name}</ListGroupItem>
                        <ListGroupItem>Product Image: {item.image} </ListGroupItem>
                        <ListGroupItem>Net Price: {item.net_price}</ListGroupItem>
                        <ListGroupItem>Taxes: {item.taxes}</ListGroupItem>
                        <ListGroupItem>Price: {item.price}</ListGroupItem>
                    </ListGroup>
                ))}
            </Card.Body>
        </Card>
    );
}

