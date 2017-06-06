import React,{Component} from 'react';
import {hashHistory} from 'react-router';

export default class Head extends Component {
	constructor(props){
		super(props);
		this.state={
			title:this.props.head.title
		}
	}	

	componentWillReceiveProps(nextProps){
		console.log(nextProps);
		this.setState({
			title: nextProps.head.title
		})
	}

	handleClick(){
		if(hashHistory.length === 0){
			hashHistory.push('/')
		}else{
			hashHistory.go(-1);
		}
	}
	
	render(){
		return (<div className="head">
					<div className='left back icon' onClick={this.handleClick.bind(this)}></div>
					<div className='content'>{this.state.title}</div>
					<div className='right'></div>
			</div>)
	}
}