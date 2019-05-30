import React from 'react'

require("../../../style/input.css");

const TextArea = (props) => {

    function autoGrowTextArea(e) {
        if (e.target.value.trim() !== "") {
            e.target.style.height = (e.target.scrollHeight - 10) + "px";
        } else {
            // e.target.style.height = "75px";
        }
    }

    function onTextChange(e) {
        autoGrowTextArea(e);
    }

    return (
        <div className="input-container-1">
            <textarea tabIndex={props.tabIndex} onChange={e => onTextChange(e)} rows="1" id={props.id} type="text" className="input-textarea" required />
            <label htmlFor={props.id} className="input-label">{props.label}</label>
        </div>
    );
};

export default TextArea;