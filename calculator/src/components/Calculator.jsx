import { useState } from "react";

function Calculator(){
    const [inputValue,setInputValue] = useState('0');
    const [resValue,setResValue] = useState('0');

    const onClick = (e) => {
        const value = e.target.dataset.value;
        const type = e.target.dataset.type;
        console.log(value, type);
        if (type === "number") {
            setInputValue((prev) => prev === '0' ? value : prev + value);
        } else if (type === "operator") {
            if(value === "C"){
                setInputValue("0");
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
            // Ensure only one period is allowed in the input
            if (!inputValue.includes('.')) {
                setInputValue((prev) => prev + value);
            }
        }
    };

    const onChange = (e)=>{
        setInputValue(e.target.value)
    }
    
    const evaluate = (e)=>{
        var res = eval(inputValue);
        console.log(res);
        setResValue(res);
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
                    <button className="calc-btn btn-secondary" data-value='C' data-type='operator' onClick={onClick}>C</button>
                    <button className="calc-btn btn-secondary" data-value='()' data-type='operator' onClick={onClick}>()</button>
                    <button className="calc-btn btn-secondary" data-value='%' data-type='operator'>%</button>
                    <button className="calc-btn btn-accent" data-value='/' data-type='operator' onClick={onClick}>/</button>
                    <button className="calc-btn" data-value='7' data-type='number' onClick={onClick}>7</button>
                    <button className="calc-btn" data-value='8' data-type='number' onClick={onClick}>8</button>
                    <button className="calc-btn" data-value='9' data-type='number' onClick={onClick}>9</button>
                    <button className="calc-btn btn-accent" data-value='*' data-type='operator' onClick={onClick}>x</button>
                    <button className="calc-btn" data-value='4' data-type='number' onClick={onClick}>4</button>
                    <button className="calc-btn" data-value='5' data-type='number' onClick={onClick}>5</button>
                    <button className="calc-btn" data-value='6' data-type='number' onClick={onClick}>6</button>
                    <button className="calc-btn btn-accent" data-value='-' data-type='operator' onClick={onClick}>-</button>
                    <button className="calc-btn" data-value='1' data-type='number' onClick={onClick}>1</button>
                    <button className="calc-btn" data-value='2' data-type='number' onClick={onClick}>2</button>
                    <button className="calc-btn" data-value='3' data-type='number' onClick={onClick}>3</button>
                    <button className="calc-btn btn-accent" data-value='+' data-type='operator' onClick={onClick}>+</button>
                    <button className="calc-btn span-two" data-value='0' data-type='number' onClick={onClick}>0</button>
                    <button className="calc-btn" data-value='.' onClick={onClick} data-type='period'>.</button>
                    <button className="calc-btn btn-accent" onClick={evaluate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator