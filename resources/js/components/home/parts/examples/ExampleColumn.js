import React, {memo} from 'react';
import ProgressiveImage from "../../../ProgressiveImage";

const ExampleColumn = memo((props) => (
    <div className="column">
        <p className={'image-styles'}>{props.style}</p>
        <div className="style-image-wrapper">
            <ProgressiveImage
                image={props.image}
                preview={props.preview}
                alt="image"
            />
        </div>
    </div>
));

export default ExampleColumn;
