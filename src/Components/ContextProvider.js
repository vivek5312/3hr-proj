import React, {useState} from 'react'
import ContextData from './ContextData'

const ContextProvider = (props) => {
  const [products, Setproducts] = useState([])
  const [cartdata, Setcartdata] = useState(0)
  const [quantity, Setquantity] = useState(0)

  const addtocart = (newmedicinename, newdescribtion, newprice, newQuantity, newkey) => {
    Setproducts((newaddtocart) => {
      return [...newaddtocart, 
        {medicinename:newmedicinename,
          describtion:newdescribtion,
          price:newprice,
          Quantity:newQuantity,
          key: newkey}]
    })
  }

  const totalcartvalue = (newinputdata) => {
    const totalvalue =  cartdata + newinputdata
    Setcartdata(totalvalue)
  }


  return (
    <ContextData.Provider value={{products, addtocart, totalcartvalue, cartdata, quantity}} >
        {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider