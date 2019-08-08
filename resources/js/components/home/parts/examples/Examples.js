import React, {memo} from 'react';
import ExampleColumn from "./ExampleColumn";

import deepDream1 from './../../../../../images/large/deepDream1.jpg'
import generate1 from './../../../../../images/large/generate1.jpg'
import styleTransfer1 from './../../../../../images/large/styleTransfer1.jpg'

import deepDream1Small from './../../../../../images/small/deepDream1Small.jpg'
import generate1Small from './../../../../../images/small/generate1Small.jpg'
import styleTransfer1Small from './../../../../../images/small/styleTransfer1Small.jpg'


const Examples = memo((props) => {
    return (
        <section className={'examples'}>
            <div className="examples-text">
                <h3 className={'examples-title'}>examples</h3>
                <p className={'examples-description'}>Choose one of the several types of NeuroArt.AI. We have 3 types
                    like Make Art, Style Transfer and Deep Dream. Let’s see some examples.</p>
            </div>
            <div className="styles">
                <ExampleColumn
                    style={'Make art'}
                    image={generate1}
                    preview={generate1Small}
                />
                <ExampleColumn
                    style={'Style transfer'}
                    image={styleTransfer1}
                    preview={styleTransfer1Small}
                />
                <ExampleColumn
                    style={'Deep dream'}
                    image={deepDream1}
                    preview={deepDream1Small}
                />
            </div>
        </section>
    )
});


export default Examples;
