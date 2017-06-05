import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'reducer/index'
import Routes from './routers/index';
import './verdor/common.js'

let store = createStore(reducer);
require('scss/reset.scss');
require('scss/base.scss');
require('scss/components.scss');

ReactDom.render(
	<Provider store={store}>
		<Routes></Routes>
	</Provider>
	,document.getElementById('container'))
