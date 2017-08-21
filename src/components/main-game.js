import React from 'react';

import './main-game.css';

import NumberInput from './number-form';
import Output from './output';
import OldGuess from './old-guesses';
import Header from './header';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          oldGuesses: [],
          result: 'Make a guess!',
          keyNumber: Math.random() * 100 + 1
        };
    }

    newGuess(newGuess) {
        const guess = parseInt(newGuess, 10);

        const guesses = this.state.oldGuesses;

        if(isNaN(guess) || guess < 0 || guess > 100) {
            this.setState({
                result: 'You need to type a number between 1 and 100'
            });
            return;
        }

        if(guesses.find(number => number === guess)) {
            this.setState({
                result: 'You already guessed that'
            });
            return;
        }

        const difference = Math.abs(guess - this.state.keyNumber);

        let feedback;

        if(difference >= 35) {
            feedback = 'You are ice cold'
        }

        else if(difference >= 20) {
            feedback = 'You are cooler than being cool'
        }

        else if(difference >= 10) {
            feedback = 'You are getting toasty'
        }

        else if(difference >= 5) {
            feedback = 'You are hot!'
        }

        else {
            feedback = 'You win!'
        }

        this.setState({
            result: feedback,
            oldGuesses: [...this.state.oldGuesses, guess]
        })

    }

    render() {
        return (
            <main>
                <Header title="Hot and Cold" />
                <div className="game">
                    <Output id="results" label="Result: " value={this.state.result} />
                    <NumberInput 
                        onGuess={value => this.newGuess(value)} 
                        id="new-guess" label="Take a Guess!" min={0} max={2} />
                    <OldGuess id="results" label="Old Guesses: " value={this.state.oldGuesses} onMap/>
                </div>
            </main>
        );
    }
}

