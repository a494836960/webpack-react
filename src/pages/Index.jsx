import React,{Component} from 'react';
import {connect} from 'react-redux';
import Head from 'component/Head'
import * as actions from 'action/index';
import ReactCSSTransitionGroup from "react-addons-css-transition-group" ;
import SideMenu from 'component/SideMenu'
import {Link} from 'react-router'

export default class Index extends Component{

    constructor(props){
        super(props);
        this.state={
            navList:[]
        }
    }

	componentWillMount(){
        this.props.dispatch(actions.toggleMenu(false));

        this.state.navList = [
            {
                id:'1',
                url:'',
                name: '57介绍',
                icon:require('img/index/home-active.png'),
                active: true
            },{
                id:'2',
                url:'/brand',
                name: '旗下品牌',
                icon:require('img/index/brand.png')
            },{
                id:'3',
                url:'/join',
                name: '在线加盟',
                icon:require('img/index/join.png')
            },{
                id:'4',
                url:'/order/submit',
                name: '提交订单',
                icon:require('img/index/submit-order.png')
            },{
                id:'5',
                url:'/order/search',
                name: '订单查询',
                icon:require('img/index/order-search.png')
            },{
                id:'6',
                url:'/activity',
                name: '品牌活动',
                icon:require('img/index/activity.png')
            },{
                id:'7',
                url:'/news',
                name: '资讯动态',
                icon:require('img/index/order-search.png')
            },{
                id:'8',
                url:'',
                name: '退出登入',
                icon:require('img/index/join.png')
            },
        ]
	}


    forward(url){
        this.props.router.push(url);
        this.props.dispatch(actions.toggleMenu(false));
    }

	render(){

        let navListHtml =[];
        this.state.navList.map((item,index)=>{
            navListHtml.push(<dd className={`${item.active ?'active' : ''} menu-item`} key={index} >
                <div className='menu-body' style={{'backgroundImage':`url(${item.icon})`}} onClick={this.forward.bind(this,item.url)}>
                    <span>{item.name}</span>
                </div>
            </dd>)
        });

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
             < / ReactCSSTransitionGroup>


             <SideMenu isShow={this.props.sideMenu.isShow}>
             	<dl className='menu'>
                    <dt className='menu-head'>
                        <img src={require('img/index/menu-logo.png')} alt="" />
                    </dt>
                    {navListHtml}
                </dl>
             </SideMenu>
		</div>
		);
	}
}

function selector (state,filter){

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