import React from 'react';
import './style.css';

export default function Number(props) {

    const addNum = (e) => {
        props.addDisplay(props.display + props.number.toString());
        
        return;
    }

    if(props.number!==0) 
    {
        return (
            <button onClick={addNum} className="number" >{props.number}</button>
        )
    }
    return (
        <button onClick={addNum} className="zero" >{props.number}</button>
    )
    
}

