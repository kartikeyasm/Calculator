import React, { useEffect, useRef, useState } from 'react';
import History from '../History/History';

const Calc = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [flag, setFlag] = useState(false);

    const inputRef = useRef(null);

    const handleButtonClick = (e) => {
        if (e === 'X') {
            setInput(input.slice(0, -1));  
            return;
        }
        else if (e === '=') {
            let temp = input;  
            let ans = 0;
            try{
                ans = eval(input).toString();  
            }
            catch(err){
                console.error("Error");
                return 
            }
            setInput(ans); 
            setHistory(prevHistory => [...prevHistory, [temp, ans]]);  
            return;
        }
        else {
            setInput(input => input + e); 
            return;
        }
    };

    useEffect(()=>{
        inputRef.current.focus();
        
        const handleKeyDown = (e)=>{
            if(e.key==='Enter'){
                handleButtonClick('=');
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return ()=>{
            window.removeEventListener("keydown", handleKeyDown);
        }
    },[input, handleButtonClick]);

    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    return (
        <div className="max-w-sm mx-auto mt-10 p-4 bg-gray-800 rounded-lg shadow-lg">
            <div className="text-right text-white text-3xl mb-4 p-4 h-20 flex items-center justify-end bg-gray-900 rounded-t-lg">
                <input ref={inputRef} className="w-full h-full text-white bg-transparent placeholder-gray-500 text-4xl font-bold outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2" type='text' value={`${input}`} placeholder={`${input || "0"}`} onChange={handleChange}></input>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <button className="calc-btn bg-gray-700 text-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full" onClick={() => setInput('')}>AC</button>
                <button className="calc-btn bg-gray-700 text-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-full" onClick={() => handleButtonClick('%')}>%</button>
                <button className="calc-btn bg-gray-700 text-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-full" onClick={() => handleButtonClick('X')}>X</button>
                <button className="calc-btn bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full" onClick={() => handleButtonClick('/')}>/</button>

                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '7')}>7</button>
                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '8')}>8</button>
                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '9')}>9</button>
                <button className="calc-btn bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full" onClick={() => handleButtonClick('*')}>*</button>

                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '4')}>4</button>
                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '5')}>5</button>
                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '6')}>6</button>
                <button className="calc-btn bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full" onClick={() => handleButtonClick('-')}>-</button>

                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '1')}>1</button>
                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '2')}>2</button>
                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '3')}>3</button>
                <button className="calc-btn bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full" onClick={() => handleButtonClick('+')}>+</button>

                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '00')}>00</button>
                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '0')}>0</button>
                <button className="calc-btn bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full" onClick={() => setInput(input => input + '.')}>.</button>
                <button className="calc-btn bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full" onClick={() => handleButtonClick('=')}>=</button>
            </div>

            <div className="mt-4">
                {!flag && <button onClick={() => setFlag(true)} className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Show History</button>}
                {flag && <button onClick={() => setFlag(false)} className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Hide History</button>}
            </div>

            {flag && <History history={history} />}
        </div>
    );
};

export default Calc;
