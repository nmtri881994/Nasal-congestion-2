import React from 'react';

const title = 'My Minimal React Webpack Babel Setup 123';

//components
import Input from '../src/components/items/form/input';
import TextArea from '../src/components/items/form/TextArea';
import Button from '../src/components/items/form/button';
import ActionButton from '../src/components/items/form/ActionButton';

import Thumbnail from '../src/components/items/card/Thumbnail';

const App = () => (
    <div>
        <div>
            <Input id={"test"} label={"Title"} tabIndex={"1"} />
        </div>
        <div>
            <TextArea id={"testarea"} label={"Title"} tabIndex={"2"} />
        </div>
        <div>
            <Button text={"Add new item"} type={"add"} tabIndex={"3"} />
        </div>
        <div>
            <Button text={"Save"} type={"check"} tabIndex={"4"} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <ActionButton type="favorite" tabIndex={"5"} />
            <ActionButton type="remove" tabIndex={"6"} />
            <ActionButton type="edit" tabIndex={"7"} />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
            <Thumbnail image={"https://images-assets.nasa.gov/image/PIA11189/PIA11189~thumb.jpg"} type={"video"} />
        </div>
    </div>
);

export default App;