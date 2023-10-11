
import "./Product.css";
import Productitem from './Productitem';
import Card from "./Card";



const Products= function(props){
    
    return (
    <Card>
    <Productitem
     title= {props.Item[0].title}
     amount= {props.Item[0].amount}
     date= {props.Item[0].date}
     />


    <Productitem 
     title= {props.Item[1].title}
     amount= {props.Item[1].amount}
     date= {props.Item[1].date}
    />


    <Productitem
     title= {props.Item[2].title}
     amount= {props.Item[2].amount}
     date= {props.Item[3].date}
    />

    <Productitem
     title= {props.Item[3].title}
     amount= {props.Item[3].amount}
     date= {props.Item[3].date}
    />
    </Card>
    )
}
export default Products;