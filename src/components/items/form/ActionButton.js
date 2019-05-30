import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faHeart, faPen } from '@fortawesome/free-solid-svg-icons';

require("../../../style/action-button.css");

const ActionButton = (props) => {
    return (
        <div className="action-button-container-1" tabIndex={props.tabIndex}>
            <FontAwesomeIcon icon={props.type === "remove" ?
                faTrashAlt : props.type === "favorite" ?
                    faHeart : props.type === "edit" ?
                        faPen : null} />
        </div>
    )
};

export default ActionButton;
