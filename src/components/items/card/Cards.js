import React from 'react';

//components
import Card from './Card';

const Cards = (props) => {
    return (
        <div style={{ marginRight: "-2rem", marginTop: "2rem" }}>
            {props.cards.map(items => <div key={items[0].data[0].nasa_id} style={{ display: "flex", flexDirection: "row", marginBottom: "2rem" }}>
                {items.map(item =>
                    <Card key={item.data[0].nasa_id} item={item} mode={props.mode} />
                )}
            </div>)}
        </div>
    )
};

export default Cards;