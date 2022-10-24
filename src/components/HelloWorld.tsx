import React from "react";

interface HellWorldProps {
    name?: string
}

const HelloWorld: React.FC<HellWorldProps> = ({name = "World"}) => {
    return (
        <h1>Hello {name}</h1>
    );
};

export default HelloWorld;