import {Router, Route, IndexRoute,Redirect,hashHistory} from 'react-router';
import React, {Component} from 'react';
import Index from 'page/Index';
import Home from 'page/home/Index'
import Brand from 'page/brand/Index'
import Activity from 'page/activity/List'
import Course from 'page/course/Index'
import News from 'page/news/Index';
import NewsDetail from 'page/news/detail';
import Honor from 'page/honor/Index'

export default class Routes extends Component{
	render(){
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Index}>
					<IndexRoute component={Home}></IndexRoute>
					<Route path='/brand' component={Brand}></Route>
					<Route path='/activity' component={Activity}></Route>
					<Route path='/course' component={Course}></Route>
					<Route path='/news' component={News}/>
					<Route path='/news/detail/:id' component={NewsDetail}/>
					<Route path='/honor' component={Honor}/>
				</Route>
			</Router>
		)
	}
}