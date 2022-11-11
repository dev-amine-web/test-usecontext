import logo from './logo.svg';
import './App.css';
import { ComponentC } from './context/ComponentC';
import { createContext, useEffect, useState } from 'react';

export const  UserContext = createContext();

function App() {
  const [products, setProducts ] = useState( [
  {id:1, value:"test1"},
  {id:2, value:"test2"},
  {id:3, value:"test3"},
]);

useEffect(()=>{
  console.log("refresh");
})
  return (
    <UserContext.Provider value={{products:products, callback:setProducts}}>
      <ComponentC />
    </UserContext.Provider>
  );
}

export default App;
