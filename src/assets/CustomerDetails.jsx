import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const CustomerDetails = () => {
    const { customerId } = useParams();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await fetch(`/api/customers/${customerId}`);
                const data = await response.json();
                setCustomer(data);
            }   catch (error) {
                console.error('Error fetching customer details:', error);
            }
        };
        fetchCustomer();
    }, [customerId]);

    const handleDelete = async () => {
        try {
            await fetch(`/api/customers/${customerId}`, {method: 'DELETE' });
            alert('Customer deleted successfully');
        }   catch (error) {
            alert('Error deleting customer');
        }
    };
    if (!customer) return <div>Loading...</div>;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{customer.name}</Card.Title>
                <Card.Text>Email: {customer.email}</Card.Text>
                <Card.Text>Phone: {customer.phone}</Card.Text>
                <Button varient="danger" onClick={handleDelete}>Delete customer</Button>
            </Card.Body>
        </Card>
    );
};

export default CustomerDetails;