import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CreateProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({ name, price }),
        headers: { 'Content-Type': 'application/json' },
      });
      alert('Product created successfully!');
    } catch (error) {
      alert('Error creating product');
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
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Product
      </Button>
    </Form>
  );
};

export default CreateProductForm;