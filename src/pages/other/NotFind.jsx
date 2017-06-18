import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';

class NotFind extends Component{

	componentWillMount(){
		this.props.dispatch(actions.setHead({title:'出错了'}));
	}

	render(){
		return (
			<div className='not-find'>
				<img className='not-find-img' src={require('img/other/404.png')}/>
				<p className='not-find-txt'>出错了</p>
			</div>
		)
	}
}

export default connect()(NotFind);