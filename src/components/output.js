import React from 'react';

import './output.css';

export default function Output(props) {

    return (
        <div className="results">
            <label htmlFor={props.id}>{props.label}</label>
            <output id={props.id} aria-live="polite">
                {props.value}
            </output>
        </div>
    );
}

Output.defaultProps = {
    value: 'Make a Guess'
};

