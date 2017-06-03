import { Router, Route, HashRouter, IndexRoute,Redirect,BrowserRouter} from 'react-router-dom';
import React, {Component} from 'react';
import Index from 'page/Index';

export default class Routes extends Component{
	render(){
		return (
			<HashRouter>
				<Route path='/' component={Index}></Route>
			</HashRouter>
		)
	}
}