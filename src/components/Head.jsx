import React,{Component} from 'react';
import {hashHistory, Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from 'action/Index'

class Head extends Component {
	constructor(props){
		super(props);
		this.state={
			title:this.props.head.title,
			isLogin: false,
			isHome: true,
			hasRight: true,
			cls: ''
		}
	}	

	componentWillReceiveProps(nextProps){
		this.setState({
			title: nextProps.head.title,
			isLogin: nextProps.isLogin,
			isHome: nextProps.head.isHome,
			hasRight: nextProps.head.hasRight,
			cls: nextProps.head.cls
		})
	}

	handleClick(){
		if(hashHistory.length === 0){
			hashHistory.push('/')
		}else{
			hashHistory.go(-1);
		}
	}
	
	showMenu(){
		this.props.dispatch(actions.toggleMenu());
	}

	render(){
		if(this.state.isHome){
			return (<div className={(this.state.cls ? this.state.cls : '') +' head'}>
						<div className='left iconfont' onClick={this.showMenu.bind(this)}>&#xe61b;</div>
						<div className='content'><img className='logo' src={require('img/index/top-logo.png')}/></div>
						{this.state.isLogin ?<Link className='right' to='/home'></Link>: <Link className='right' to='/user'>登入</Link>}
					</div>)
		}

		return (<div className={(this.state.cls ? this.state.cls : '') +' head'}>
					<div className='left iconfont back' onClick={this.handleClick.bind(this)}>&#xe60b;</div>
					<div className='content'>{this.state.title}</div>
					{this.state.hasRight ? (this.state.isLogin ?<Link className='right iconfont' to='/home'>&#xe608;</Link>: <Link className='right' to='/user'>登入</Link>) : <Link className='right'></Link>}
			</div>)
	}
}

export default connect()(Head);