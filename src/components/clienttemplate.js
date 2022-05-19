import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

export default function Template() {
    const [clients, setMembers] = useState([]);
    const url = "https://fakerapi.it/api/v1/companies?_quantity=1"

    const fetchPost = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setMembers(data.data);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Gender</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((item, i) => (
                    <tr key={i}>
                        <td>{item.contact.firstname} {item.contact.lastname}</td>
                        <td>{item.contact.email}</td>
                        <td>{item.contact.phone}</td>
                        <td>{item.contact.gender}</td>
                        <td>{item.contact.image}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

