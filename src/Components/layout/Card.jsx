import React from "react";
import "./Card.css"

let Card = (props) => {

  const cardStyle = {
    
backgroundColor: props.color || 'red',
borderColor: props.color || 'red'  
}

  return (
    <div className="Card" style={cardStyle}>
        <div className= "Title">{ props.titulo }</div>
        <div className= "Content">{ props.children }</div>
    </div>
  )
};  

export default Card