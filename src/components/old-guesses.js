import React from 'react';

import './old-guesses.css';

export default function OldGuess(props) {
	const oldGuesses = props.value.map((guess, index) => (
		<li key={index}>
			{guess}, 
		</li>
	))

    return (
        <div className="old-group">
            <label htmlFor={props.id}>{props.label}</label>
            <ul id={props.id} aria-live="polite">
                {oldGuesses}
            </ul>
        </div>
    );
}

OldGuess.defaultProps = {
    value: ''
};

