import React, { useState } from 'react';

interface ICalculatorProps {

}

export const Calculator : React.FunctionComponent<ICalculatorProps> = () => {
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [currentInput, setCurrentInput] = useState<number>(0.0);

    return <div>
        <input type="number" placeholder="0.0" step="0.01" onChange={(e) => setCurrentInput(Number(e.target.value))} />
        <button onClick={() => setCurrentValue(currentInput + currentValue)}>add</button>
        <button onClick={() => setCurrentValue(currentValue - currentInput)}>subtract</button>
        <button onClick={() => setCurrentValue(currentValue * currentInput)}>multiply</button>
        <button onClick={() => setCurrentValue(currentValue / currentInput)}>divide</button>
        <span>{currentValue}</span>
    </div>;
};