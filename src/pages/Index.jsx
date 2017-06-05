import React,{Component} from 'react';
import {connect} from 'react-redux';
import Head from 'component/Head'
import * as actions from 'action/index';
import ReactCSSTransitionGroup from "react-addons-css-transition-group" ;
import SideMenu from 'component/SideMenu'

export default class Index extends Component{

	componentWillMount(){
		this.props.dispatch(actions.setHead({title:'官网'}))
	}

	render(){
		return(
		<div>
			<Head head={this.props.head}></Head>
			 < ReactCSSTransitionGroup
                 transitionName = "fade"
                 component = "div"
                 className = 'transitionWrapper'
                 transitionEnterTimeout = { 300 }
                 transitionLeaveTimeout = { 300 } >
                 < div key = { this . props . location . pathname }
                     style = { { position : "absolute" , width : "100%",top: ".95rem" } } >
                     {
                         this.props.children
                     }
                 < / div >
             < / ReactCSSTransitionGroup >
             <SideMenu>
             	
             </SideMenu>
		</div>
		);
	}
}

function selector (state,filter){
	return state;
}

module.exports = connect(selector)(Index);