import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

//style
require("../../../style/card.css");

//components
import Thumbnail from './Thumbnail';
import ActionButton from '../form/ActionButton';

//actions
import { getMetadataByNasaId } from '../../../actions/searchAction';
import { viewMedia } from '../../../actions/cardAction';

const Card = (props) => {

    const [owner, setOwner] = useState("");

    useEffect(() => {
        let isSubcribed = true;

        async function getOwner() {
            const metadatRes = await getMetadataByNasaId(props.item.data[0].media_type, props.item.data[0].nasa_id);
            if (metadatRes && metadatRes.status === 200) {
                const metadata = await metadatRes.json();
                setOwner(metadata["AVAIL:Owner"]);
            }
        }
        getOwner();

        return () => isSubcribed = false;
    }, [props.item.data[0].nasa_id])

    return (<div className="card-container-1" onClick={() => {
        props.viewMedia({
            name: props.item.data[0].title,
            type: props.item.data[0].media_type,
            contentLink: props.item.links[0].href
        });
    }}>
        <Thumbnail
            image={props.item.links ? props.item.links[0].href : null} type={props.item.data[0].media_type} />
        <div className="card-detail-container-1">
            <div className="card-detail-item-container-1 card-location-time">
                <div className="card-location">
                    {owner}
                </div>
                <div className="card-time">
                    {new Date(props.item.data[0].date_created).toLocaleTimeString()}
                </div>
            </div>
            <div className="card-detail-item-container-1 card-title">
                {props.item.data[0].title}
            </div>
            <div className="card-detail-item-container-1 card-description">
                {props.item.data[0].description}
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ viewMedia }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);