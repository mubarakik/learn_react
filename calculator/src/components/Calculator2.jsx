import { useState } from "react";
import Button from "./Button";

function Calculator2(){
    const [inputValue,setInputValue] = useState('');
    const [resValue,setResValue] = useState('0');

    const onClick = (e,props) => {
        const value = props.value;
        const type = props.type;
        console.log(value, type);
        if (type === "number") {
            setInputValue((prev) => prev === '' ? value : prev + value);
        } else if (type === "operator") {
            if(value === "C"){
                setInputValue("");
                setResValue("0");
            } else if(value === "()"){
                setInputValue((prev) => {
                    const openBraces = (prev.match(/\(/g) || []).length;
                    const closeBraces = (prev.match(/\)/g) || []).length;
                    
                    // Add '(' if there are equal or more closing braces, otherwise add ')'
                    return openBraces > closeBraces ? prev + " )" : prev + " (";
                });
            }else {
                setInputValue((prev) => prev + ' ' + value + ' ');
            } 
        } else if (type === "period") {
             // Handle period logic to ensure only one period per number section
            setInputValue((prev) => {
                const lastSection = prev.split(/[\+\-\*\/\(\)\s]+/).pop(); // Get the current number segment
                if (!lastSection.includes('.')) {
                    // Add period only if there's no period in the current number segment
                    return prev + value;
                }
                return prev; // Do nothing if the period already exists in the current segment
            });
        }
    };

    const onChange = (e)=>{
        setInputValue(e.target.value)
    }
    
    const evaluate = (e)=>{

        try{
            const res = eval(inputValue);       
            setResValue(res);
        }catch(error){
            console.error("Error evaluating expression", error);
            setResValue("Syntax Error");
        }
        
    }
    
    return (
        <div className="calculator">
            <div className="color-controls">
                <button><i className="ri-sun-line"></i></button>
                <button><i className="ri-moon-line"></i></button>
            </div>
            <div className="display">
                <input type="text" value={inputValue} onChange={onChange}/>
                <span className="result">{resValue}</span>
            </div>
            <div className="controls-container">
                <div className="controls">
                    <button><i className="ri-history-line"></i></button>
                    <button><i className="ri-save-line"></i></button>
                    <button><i className="ri-settings-3-line"></i></button>
                </div>
                <div className="calc-btn-grid">
                    <Button className='calc-btn btn-secondary' value='C' type='operator' icon='' text='C' onClick={onClick}/>
                    <Button className='calc-btn btn-secondary' value='()' type='operator' icon='' text='()' onClick={onClick}/>
                    <Button className='calc-btn btn-secondary' value='%' type='operator' icon='' text='%' onClick={onClick}/>
                    <Button className='calc-btn btn-accent' value='/' type='operator' icon='' text='/' onClick={onClick}/>

                    <Button className='calc-btn' value='7' type='number' icon='' text='7' onClick={onClick}/>
                    <Button className='calc-btn' value='8' type='number' icon='' text='8' onClick={onClick}/>
                    <Button className='calc-btn' value='9' type='number' icon='' text='9' onClick={onClick}/>
                    <Button className='calc-btn btn-accent' value='*' type='operator' icon='' text='x' onClick={onClick}/>

                    <Button className='calc-btn' value='4' type='number' icon='' text='4' onClick={onClick}/>
                    <Button className='calc-btn' value='5' type='number' icon='' text='5' onClick={onClick}/>
                    <Button className='calc-btn' value='6' type='number' icon='' text='6' onClick={onClick}/>
                    <Button className='calc-btn btn-accent' value='-' type='operator' icon='' text='-' onClick={onClick}/>

                    <Button className='calc-btn' value='1' type='number' icon='' text='1' onClick={onClick}/>
                    <Button className='calc-btn' value='2' type='number' icon='' text='2' onClick={onClick}/>
                    <Button className='calc-btn' value='3' type='number' icon='' text='3' onClick={onClick}/>
                    <Button className='calc-btn btn-accent' value='+' type='operator' icon='' text='+' onClick={onClick}/>

                    <Button className='calc-btn span-two' value='0' type='number' icon='' text='0' onClick={onClick}/>
                    <Button className='calc-btn' value='.' type='period' icon='' text='.' onClick={onClick}/>
                    <Button className='calc-btn btn-accent' value='=' type='operator' icon='' text='=' onClick={evaluate}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator2