import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//style
require("../../../style/media-display.css");

//actions
import { closeMediaDisplay } from '../../../actions/cardAction';

const Display = (props) => {

    useEffect(() => {
    })

    return (
        <>
            {!_.isEmpty(props.media) ? <div className="media-display-container-1">
                <div className="media-display-container-2">
                    <div className="media-header-container-1">
                        <div className="media-title">
                            {props.media.name}
                        </div>
                        <div className="media-display-close" onClick={() => props.closeMediaDisplay()}>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    {/* <div className="media-container-1"> */}
                    {props.media.type === "image" ?
                        <img className="media-image" srcSet={`${props.media.contentLink} 500w`} sizes="40vh" />
                        : null}}
                </div>
            </div> : null}
        </>
    )
};

Display.propTypes = {
    media: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    media: state.mediaDisplay
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ closeMediaDisplay }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Display);