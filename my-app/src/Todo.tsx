import React, { useState } from 'react';

interface ITodoProps {

}

export const Todo : React.FunctionComponent<ITodoProps> = () => {
    const [items, setItems] = useState<ReadonlyArray<string>>([]);

    const remove = (index: number) => {
        const newValue = [...items]
        newValue.splice(index, 1)
        setItems(newValue);
    };

    return <div>
        <input type={"text"} onBlur={(e) => {setItems([...items, e.target.value])}}/>
        {items.map((v, i) => 
            <div key={i}>{v} <button onClick={() => remove(i)}>Remove</button></div>
        )}    
    </div>;
};