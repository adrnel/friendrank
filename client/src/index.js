import React from 'react';
import ReactDOM from'react-dom';
import App from './App';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
        .then(worker => console.log('service worker registered: ', worker))
        .catch(error => console.error(error));
}

ReactDOM.render(<App />, document.getElementById('root'));
