import Card from "./Card";
import ProductDate from "./productDate";
// import React, { useState } from 'react';

const Productitem = function(props)
{
    // const [title, setTitle]= useState(props.title)
    return (
  <Card className='product-item'>
<ProductDate date= {props.date}></ProductDate>
<div className="product-item-dicription">
    <h2>{props.title}</h2>
</div>
</Card>
    )
}
export default Productitem;