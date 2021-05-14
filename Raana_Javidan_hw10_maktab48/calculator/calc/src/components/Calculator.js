import React, {useState} from 'react'
import Keyboard from './Keyboard'
import Screen from './Screen'

 function Calculator() {
     const [input, setInput]= useState('')
     //ADD INPUT
    const addInput = (char)=>{
        var newInput = "";
        if( input.length===0){
            if(isNaN(Number(char))){
                newInput = [...input];
                newInput += 0 + char
                setInput(newInput);
                return
            } else{
                newInput = [...input];
                newInput += char
                setInput(newInput);
                return
            }
        } 
         newInput = input;
        newInput+= char;
        setInput(newInput)
    }
     //CLEAR INPUT
     const clearInput= ()=>{
        setInput("")

     }
    //CALCULATE

    const calculate = () => {
        //set input to the returned eval
        try{
            setInput(evaluate(input))
        } catch (e){
            console.log(e);
        }
    }

    function evaluate(fn) {
        return new Function("return " + fn)();
    }


    return (
        <div className="calc">
            <div className="calcHeader">Calculator</div>
            <Screen input={input}/>
            <Keyboard addInput={addInput} calculate={calculate}/>
            <div className="clearButton" onClick={clearInput}>clear</div>
        </div>
    )
}
export default Calculator