import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateCustomerForm = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await fetch(`/api/customers/${customerId}`);
      const data = await response.json();
      setCustomer(data);
    };
    fetchCustomer();
  }, [customerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/customers/${customerId}`, {
        method: 'PUT',
        body: JSON.stringify(customer),
        headers: { 'Content-Type': 'application/json' },
      });
      alert('Customer updated successfully!');
    } catch (error) {
      alert('Error updating customer');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Update Customer</Button>
    </Form>
  );
};

export default UpdateCustomerForm;