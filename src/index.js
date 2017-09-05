import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ReadableApp from './components/ReadableApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><ReadableApp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
