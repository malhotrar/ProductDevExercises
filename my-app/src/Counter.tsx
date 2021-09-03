import React, { useState } from 'react';

interface ICounterProps {

}

export const Counter : React.FunctionComponent<ICounterProps> = ({

}) => {
    const [value, setValue] = useState<number>(0);

    return <div>
        <button onClick={() => setValue(value + 1)}>increment</button>
        <button onClick={() => setValue(value - 1)}>decrement</button>
        <span>{value}</span>
    </div>;
};