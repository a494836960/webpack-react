import React from 'react';
import ReactDom from 'react-dom';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from 'reducer/index'
import routes from './routers/root';
import './verdor/common.js'
import 'whatwg-fetch'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

import {Router, Route, IndexRoute,Redirect,hashHistory} from 'react-router';


let store = createStoreWithMiddleware(reducer);
require('scss/reset.scss');
require('scss/base.scss');
require('scss/components.scss');
require('scss/font/index.scss');

ReactDom.render(
	<Provider store={store}>
		<Router routes = {routes} history = {hashHistory}></Router>
	</Provider>
	,document.getElementById('container'))
