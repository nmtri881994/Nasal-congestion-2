import React from 'react';

//components
import Card from './Card';
import InfoForm from '../form/InfoForm';

const Cards = (props) => {
    return (
        <div style={{ marginRight: "-2rem", marginTop: "2rem" }}>
            <InfoForm mode={props.mode} />
            {props.cards.map(items => <div key={items[0].nasaId} style={{ display: "flex", flexDirection: "row", marginBottom: "2rem" }}>
                {items.map(item =>
                    <Card key={item.nasaId} item={item} mode={props.mode} />
                )}
            </div>)}
        </div>
    )
};

export default Cards;