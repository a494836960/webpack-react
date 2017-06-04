import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routers/index';
import './verdor/common.js'

require('scss/reset.scss');
require('scss/base.scss');

ReactDom.render(
		<Routes></Routes>
	,document.getElementById('container'))
