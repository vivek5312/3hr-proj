import React, { useEffect, useState } from 'react'
import ButtonData from '../Model/Button'

const Display = () => {
    const [products, Setproducts] = useState([])
    useEffect(() => {
    fetch(`https://crudcrud.com/api/4c9aff3164374a62ba1336458bf3a2fd/Products`)
        .then(res => res.json())
        .then(data => Setproducts(data))
    },[])
    console.log(products.length);

  return (
    <div>
      <h1>Diplay</h1>
      {products.map(pro => (
  <p key={pro._id}>
    {pro.medicinename} - {pro.describtion} - Rs. {pro.price} - {pro.Quantity}
    <ButtonData
      id={pro._id}
      Quantity={pro.Quantity}
      medicinename={pro.medicinename}
      describtion={pro.describtion}
      price={pro.price}
    />
  </p>
))}

    </div>
  )
}

export default Display;