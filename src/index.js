import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainGame from './components/main-game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<MainGame />, 
	document.getElementById('root')
	);
registerServiceWorker();
