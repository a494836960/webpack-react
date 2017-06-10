import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'reducer/index'
import routes from './routers/root';
import './verdor/common.js'

import {Router, Route, IndexRoute,Redirect,hashHistory} from 'react-router';


let store = createStore(reducer);
require('scss/reset.scss');
require('scss/base.scss');
require('scss/components.scss');

ReactDom.render(
	<Provider store={store}>
		<Router routes = {routes} history = {hashHistory}></Router>
	</Provider>
	,document.getElementById('container'))
