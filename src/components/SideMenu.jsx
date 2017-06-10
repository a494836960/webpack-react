import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from 'action/Index'

class SideMenu extends Component {

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

	toggle(){
		this.setState({
			isShow: !this.state.isShow
		})
	}

	hide(){
		this.props.dispatch(actions.toggleMenu(false));
	}

	render(){  
		return (
			<div  className = {`side-menu ${this.state.isShow?'active': 'exit'}`}>
				<div className='content'>
						{this.props.children}
				</div>	
				<div className="cover" onClick = {this.hide.bind(this)}></div>
			</div>
			
		)
	}
}

SideMenu.defaultProps = {
	isShow: false
}

export default connect()(SideMenu);