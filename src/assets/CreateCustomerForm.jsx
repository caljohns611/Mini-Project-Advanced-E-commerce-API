import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CreateCustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/customers', {
                method: 'POST',
                body: JSON.stringify({ name, email, phone }),
                headers: { 'Content-Type': 'application/json' },
            });
            alert('Customer created successfully');
        }   catch (error) {
            alert('Error creating customer');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    />
            </Form.Group>
            <Button varient="primary" type="submit">Create Customer</Button>
        </Form>
    );
};

export default CreateCustomerForm;