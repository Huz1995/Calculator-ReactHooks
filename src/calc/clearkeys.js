import React from 'react'

import './style.css';

export default function Clear(props) {

const clear = () => {
    if(props.clear === "C") {
        props.addDisplay("");
        return;
    }
    props.addDisplay("");
    props.addStack([]);
    props.addOpStack([]);
}

        return (
            <button onClick={clear} className="clear" >{props.clear}</button>
        )
}
