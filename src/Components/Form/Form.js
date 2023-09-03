import React, { useContext, useState } from 'react';
import ContextData from '../ContextData';

const FormData = () => {
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const { addtocart } = useContext(ContextData);

  const handleMedicineNameChange = (event) => {
    setMedicineName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input (for example, ensure price and quantity are positive numbers)

    const formData = {
      medicinename: medicineName,
      describtion: description,
      price: parseFloat(price), // Convert to a number
      Quantity: parseInt(quantity), // Convert to an integer
    };

    addtocart(formData);

    // Clear the form fields
    setMedicineName('');
    setDescription('');
    setPrice('');
    setQuantity('');

    // Send the data to the server (with error handling)
    fetch('https://crudcrud.com/api/4c9aff3164374a62ba1336458bf3a2fd/Products', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Data sent successfully:', data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div className="form">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Medicine Name:</label>
        <input type="text" value={medicineName} onChange={handleMedicineNameChange} required />
        <br />
        <label>Description:</label>
        <input type="text" value={description} onChange={handleDescriptionChange} required />
        <br />
        <label>Price:</label>
        <input type="number" value={price} onChange={handlePriceChange} required />
        <br />
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={handleQuantityChange} required />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormData;
