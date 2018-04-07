import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Common/HeaderFooters/Footer';
import Header from './Common/HeaderFooters/Header';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();