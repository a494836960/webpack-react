import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routers/index'
require('scss/base.scss');

ReactDom.render(<Routes></Routes>,document.getElementById('container'))