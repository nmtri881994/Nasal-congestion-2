import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

//css

require("../../../style/card.css");

//components
import Thumbnail from './Thumbnail';
import ActionButton from '../form/ActionButton';

const Card = (props) => {

    return (<div className="card-container-1">
        <Thumbnail image={props.item.previewImgUrl} type={props.item.type} />
        <div className="card-detail-container-1">
            <div className="card-detail-item-container-1 card-location-time">
                <div className="card-location">
                    {props.item.localtion}
                </div>
                <div className="card-time">
                    {props.item.time}
                </div>
            </div>
            <div className="card-detail-item-container-1 card-title">
                {props.item.title}
            </div>
            <div className="card-detail-item-container-1 card-description">
                {props.item.description}
            </div>
        </div>
        <div className="card-action-container-1">
            <div className="card-action-container-2">
                {props.mode === "view" ? <div className="card-view-action-container-1">
                    <ActionButton type="favorite" tabIndex={"5"} />
                    <ActionButton type="remove" tabIndex={"6"} />
                    <ActionButton type="edit" tabIndex={"7"} />
                </div> : props.mode === "search" ? <div className="card-search-action-container-1">
                    <span>Add to Nasa collection</span>
                    <div className="add-to-collection-button-icon">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div> : null}
            </div>
        </div>
    </div>);
        };
        
export default Card;