import React from "react";

interface CounterProps {
    name?: string
}

const Counter: React.FC<CounterProps> = ({name = "World"}) => {
    return (
        <h1>Hello {name}</h1>
    );
};

export default Counter;