import './Card.css'


const Card = function(props){
    const classes = props.className;
    return (
   <div className={classes}>{props.children}</div>
    )
};
export default Card;