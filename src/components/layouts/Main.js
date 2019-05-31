import React from 'react';

require("../../style/main-layout.css");

const Layout = (props) => {
    return (
        <div className="page">
            <div className="main-container-1">
                {props.children}
            </div>
        </div>
    )
};

export default Layout;