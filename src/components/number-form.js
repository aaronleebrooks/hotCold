import React from 'react';

import './number-form.css';

export default class NumberInput extends React.Component {
    onGuess(event) {
        event.preventDefault();

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
    }

    render() {
	    return (
	        <form className="form-group" onSubmit={e => this.onGuess(e)}>
	            <label></label>
	            <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
	        	<button type="click">Submit</button>
        	</form>
	    );
	}
}
