import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import "../index.css";
import Title from "./Title.jsx";

const Counter = ({counterStart = 4}) => {
    const [old, setOld] = useState(counterStart);

    useEffect(() => {
        const timer = setInterval(() => {
            setOld(o => o + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div>
            <Title old={old}/>
        </div>
    );
};

Counter.propTypes = {
    counterStart: PropTypes.number
}

export default Counter;