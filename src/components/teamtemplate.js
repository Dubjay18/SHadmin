import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

export default function App() {
    const [members, setMembers] = useState([]);
    const url = "https://fakerapi.it/api/v1/persons?_quantity=10"

    const fetchPost = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data[0]);
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
                {members.map((item, i) => (
                    <tr key={i}>
                        <td>{item.firstname} {item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.gender}</td>
                        <td>{item.image}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

