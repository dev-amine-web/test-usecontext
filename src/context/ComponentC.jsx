import React, { useContext } from 'react'
import { UserContext } from '../App';
import { ComponentE } from './ComponentE'

export const ComponentC = () => {
    const {products, callback} = useContext(UserContext);
    function addProduct(){
        console.log('ddddddddddddd');
        callback([...products, {id:4, value:"test4"}]);
    }
  return (
    <>
    { products.length <4  &&
    <button onClick={ addProduct} >Add</button>
}
    <ComponentE/>
    </>
  )
}
