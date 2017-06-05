import React,{Component} from 'react';
import {Link} from 'react-router';

export default class SideMenu extends Component {

	constructor(props){
		super(props);
		this.state = {
			isShow: this.props.isShow
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			isShow: nextProps.isShow
		})
	}

	render(){
		return (
			<div>
				侧边蓝
			</div>
		)
	}
}

SideMenu.defaultProps = {
	isShow: false
}