import React, { useContext } from 'react'
import { UserContext } from '../App';

export const ComponentF = () => {
    const {products}= useContext(UserContext);
    console.log(products);
  return (
    <div>Component F</div>
  )
}
