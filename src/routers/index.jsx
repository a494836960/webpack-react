import {Router, Route, IndexRoute,Redirect,hashHistory} from 'react-router';
import React, {Component} from 'react';
import Index from 'page/Index';
import Home from 'page/home/Index'
import Brand from 'page/brand/Index'
import Activity from 'page/activity/List'

export default class Routes extends Component{
	render(){
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Index}>
					<IndexRoute component={Home}></IndexRoute>
					<Route path='/brand' component={Brand}></Route>
					<Route path='/activity' component={Activity}></Route>
				</Route>
			</Router>
		)
	}
}