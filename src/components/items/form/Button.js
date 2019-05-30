import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

require("../../../style/button.css");

const Button = (props) => (
    <div className="button-container-1" tabIndex={props.tabIndex}>
        <div className="button-item button-icon">
            {props.type ?
                <FontAwesomeIcon icon={props.type === "add" ?
                    faPlus : props.type === "check" ? faCheck : null} /> : null}
        </div>
        <div className="button-item button-text">
            {props.text}
        </div>

    </div>
);

export default Button;