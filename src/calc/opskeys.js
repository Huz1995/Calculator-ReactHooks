import React from 'react'
import './style.css'

export default function Ops(props) {


const addOperand = () => {
    if(["+","-","/","x","="].includes(props.operands) && props.display!=="") {
    
    props.addStack([...props.stack,parseFloat(props.display)])
    props.addOpStack([...props.opstack,props.operands]);
 
    }

    if(props.operands==='.') 
    {   
        if(!props.display.includes('.'))
        {
            props.addDisplay(props.display+props.operands);
            return;
        }
    }
    else if(props.display==="" && (props.operands==="+" || props.operands==='-'))
        {
            props.addDisplay(props.display + props.operands);
            return;
        }
        else
        {
            props.addDisplay("");
            return;
        }
    }   

 return (
        <button onClick={addOperand} className="operands" >{props.operands}</button>
    )
}
   
 

