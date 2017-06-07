import React,{Component} from 'react';
import {connect} from 'react-redux';
import Head from 'component/Head'
import * as actions from 'action/index';
import ReactCSSTransitionGroup from "react-addons-css-transition-group" ;
import SideMenu from 'component/SideMenu'

export default class Index extends Component{

	componentWillMount(){
        this.props.dispatch(actions.toggleMenu(false));
	}

	render(){
        console.log(this.props,'render')
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
                   className='main' >
                     {
                         this.props.children
                     }
                 < / div >
             < / ReactCSSTransitionGroup >
             <SideMenu isShow={this.props.sideMenu.isShow}>
             	
             </SideMenu>
		</div>
		);
	}
}

function selector (state,filter){
    console.log(state.setHead.title,'state');
    

	return {
        head:{
            title: state.setHead.title
        },
        sideMenu:{
            isShow: state.toggleMenu.isShow
        }
    };
}

module.exports = connect(selector)(Index);