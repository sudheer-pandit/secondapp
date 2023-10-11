import React from "react";


const ProductDate = function(props){

    const month =props.Date.toLocalString('en-US',{month:'long'});
    const day = props.Date.toLocalString('en-US', {day:'2-digit'});
    const year = props.year.getFullYear();

    return(
    <div className="product-date">
        <div className="product-date-month">{month}</div>
        <div className="product-date-year">{year}</div>
        <div className="product-date-day">{day}</div>

    </div>
    )
}

export default ProductDate;