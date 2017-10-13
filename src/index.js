import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App2 from './App2';
import Clock from './Clock';
import Toggle from './Toggle';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <div>
        <App2 />
        <Clock label="Not hello world" sleepTime="2000" />
        <Toggle/>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
