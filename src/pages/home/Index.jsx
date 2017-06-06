import React,{Component} from 'react';
import {connect} from 'react-redux'
import * as actions from 'action/Index'

 class Index extends Component{

 	componentWillMount(){
 		this.props.dispatch(actions.setHead({title:'首页'}));
 	}

	showMenu(){
		this.props.dispatch(actions.toggleMenu())
	}
	render(){
		return(
			<div>首fffff页
				<div onClick={this.showMenu.bind(this)}>点加我</div>
			</div>
		)
	}
}

export default connect()(Index)