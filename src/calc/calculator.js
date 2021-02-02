import React, {useState, useEffect} from 'react'
import Numkeys from './numkeys'
import Opskey from './opskeys'
import Clear from "./clearkeys"
import Screen from "./screen"


export default function Calculator() {
    
    const [display, addDisplay] = useState("");
    const [stack, addStack] = useState([]);
    const [opstack, addOpStack] = useState([])

    const compute = (num1, num2, operand) => {
        if(operand==="+") {
            return num1+num2;
        }
        else if(operand==="-") {
            return num1-num2;
        }
        else if(operand==="x") {
            return num1*num2;
        }
        else if(operand==="/") {
            return num1/num2;
        }
    }

    useEffect(()=>{
        if(opstack[opstack.length-1]==="="){
           while(stack.length!==1) {
                const compnum = compute(stack[0],stack[1],opstack[0]);
                stack.shift();
                opstack.shift();
                stack[0]=compnum;
           }
           addDisplay(stack[0].toString());
           addStack([]);
           addOpStack([]);

        }
    },[display,stack,opstack])

    return (
        <div className="calc">
            <div className='screenrow'>
            <Screen screen={display}></Screen>
            </div>
            <div className='clearrow'>
            <Clear opstack={opstack} addOpStack={addOpStack} stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} clear={"Clear"}></Clear>
            <Clear opstack={opstack} addOpStack={addOpStack} stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} clear={"C"}></Clear>
            </div>
            <div className='rowone'>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={9}></Numkeys>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={8}></Numkeys>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={7}></Numkeys>
            <Opskey opstack={opstack} addOpStack={addOpStack} stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} operands={"+"}></Opskey>
            </div>
            <div className='rowtwo'>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={6}></Numkeys>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={5}></Numkeys>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={4}></Numkeys>
            <Opskey  opstack={opstack} addOpStack={addOpStack} stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} operands={"-"}></Opskey>
            </div>
            <div className='rowthree'>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={3}></Numkeys>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={2}></Numkeys>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={1}></Numkeys>
            <Opskey opstack={opstack} addOpStack={addOpStack} stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} operands={"x"}></Opskey>
            </div>
            <div className='rowfour'>
            <Numkeys stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} number={0}></Numkeys>
            <Opskey opstack={opstack} addOpStack={addOpStack} stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} operands={"="}></Opskey>
            <Opskey opstack={opstack} addOpStack={addOpStack} stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} operands={"."}></Opskey>
            <Opskey opstack={opstack} addOpStack={addOpStack} stack={stack} addStack={addStack} display={display} addDisplay={addDisplay} operands={"/"}></Opskey>
            </div>
        </div>
    )
}
