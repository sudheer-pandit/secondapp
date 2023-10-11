// import React from 'react';
import './App.css';
import Products from './Component/Products';


function App() {
  const myProducts = [
   {
    id:'p1',
    title:'Nirma',
    amount:'350',
    date: new Date(1996 , 3, 2)
   },
   {
    id:'p2',
    title:'Excel',
    amount:'440',
    date: new Date(2000 , 4 ,10)
   },
   {
    id:'p3',
    title:'Tide',
    amount:'550',
    date: new Date(2012 , 15,12)
   },
   {
    id:'p4',
    title:'watch',
    amount:'600',
    date: new Date(2015 , 13, 5)
   },
  ];
  return (
    <div> 
   <Products Item = {myProducts}>

   </Products>
   </div>
  )
}

export default App;
