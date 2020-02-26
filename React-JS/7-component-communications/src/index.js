import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App title={"React JS 16"}  trainer={"Praveen"}/>, document.getElementById('root'));

serviceWorker.unregister();
