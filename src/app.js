import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp.js';

// styles
import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp options={['options one', 'options two']}/>, document.getElementById('app'));