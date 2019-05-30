import React from 'react'

require("../../../style/input.css");

const Input = (props) => {
    return (
        <div className="input-container-1">
            <input tabIndex={props.tabIndex} id={props.id} type="text" className="input" required />
            <label htmlFor={props.id} className="input-label">{props.label}</label>
        </div>
    );
};

export default Input;