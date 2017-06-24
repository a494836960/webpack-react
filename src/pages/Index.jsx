import React,{Component} from 'react';
import {connect} from 'react-redux';
import Head from 'component/Head'
import * as actions from 'action/Index';
import ReactCSSTransitionGroup from "react-addons-css-transition-group" ;
import SideMenu from 'component/SideMenu';
import {Tips} from 'component/Alert';
import {Link} from 'react-router';
import tools from 'verdor/tools';

class Index extends Component{

    constructor(props){
        super(props);
        this.state={
            navList:[]
        }
    }

	componentWillMount(){
        this.props.dispatch(actions.toggleMenu(false));
        this.props.dispatch(actions.getUser());
        this.state.navList = [
            {
                id:'1',
                url:'',
                name: '57介绍',
                icon:'&#xe657',
                active: true
            },{
                id:'2',
                url:'/brand',
                name: '旗下品牌',
                icon:'&#xe628;'
            },{
                id:'3',
                url:'/join',
                name: '在线加盟',
                icon:'&#xe600;'
            },{
                id:'4',
                url:'/order',
                name: '提交订单',
                icon:'&#xe656;'
            },{
                id:'5',
                url:'/order/search',
                name: '订单查询',
                icon:'&#xe61e;'
            },{
                id:'6',
                url:'/activity',
                name: '品牌活动',
                icon:'&#xe64e;'
            },{
                id:'7',
                url:'/news',
                name: '资讯动态',
                icon:'&#xe62a;'
            },{
                id:'8',
                url:'/recruitment',
                name: '人才招聘',
                icon:'&#xe6d1;'
            },{
                id:'9',
                url:'/user',
                name: '退出登入',
                icon:'&#xe663;',
                onClick:(props,url)=>{
                    if(props.user.isLogin){ //如果是登陆状态
                        tools.fetch({url:'/protal/mobile/logout',method:"get"}).then(response=>{
                            props.dispatch(actions.setUser({isLogin: false}));
                            props.router.push(url);
                            props.dispatch(actions.toggleMenu(false));
                        })
                    } else {
                        props.router.push(url);
                        props.dispatch(actions.toggleMenu(false));
                    }
                }
            },
        ]
	}

    forward(url,cb){
       
        if(cb){
            cb(this.props,url);
        }else{
            this.props.router.push(url);
            this.props.dispatch(actions.toggleMenu(false));
        }
    }

	render(){

        let navListHtml =[];
        this.state.navList.map((item,index)=>{
            navListHtml.push(<dd className={`${item.active ?'active' : ''} menu-item`} key={index} >
                <div className='menu-body' onClick={this.forward.bind(this,item.url,item.onClick)}>
                <i className='iconfont' dangerouslySetInnerHTML={{__html: item.icon}}></i>
                    <span>{item.name}</span>
                </div>
            </dd>)
        });
		return(
		<div>
			<Head head={this.props.head} isLogin={this.props.user.isLogin}></Head>
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
            <Tips txt={this.props.tips}></Tips>
		</div>
		);
	}
}

function selector (state,filter){
	return {
        head:{
            title: state.setHead.title,
            isHome: state.setHead.isHome,
            hasRight: state.setHead.hasRight,
            cls: state.setHead.cls
        },
        sideMenu:{
            isShow: state.toggleMenu.isShow
        },
        user:{
            isLogin: state.user.isLogin
        },
        tips:{
            txt: state.showTip.txt
        }
    };
}

export default connect(selector)(Index);