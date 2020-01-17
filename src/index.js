import React from 'react';
import { render } from 'react-snapshot';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
