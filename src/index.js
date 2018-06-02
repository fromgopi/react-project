import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MUI from './MainUI'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="Gopi"/>, document.getElementById('root'));
registerServiceWorker();
