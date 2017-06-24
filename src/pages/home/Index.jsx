import React,{Component} from 'react';
import {connect} from 'react-redux'
import * as actions from 'action/Index';
import Banner from 'component/Banner'
import {Link} from 'react-router';


 class Index extends Component{
 	constructor(props){
 		super(props);
 		this.state={
 			list:[],
 			sections:[]
 		}
 	}

 	componentWillMount(){
 		this.props.dispatch(actions.setHead({isHome:true}));
 		this.props.dispatch(actions.getHome());
 		this.props.dispatch(actions.getFriendLinks());
        this.props.dispatch(actions.getIntro());
 	}

 	componentDidMount(){
 	
 	}

	showMenu(){
		this.props.dispatch(actions.toggleMenu());
	}

	render(){
		console.log(this.props.banner);
		let sectionHtml = [];

		this.props.intros.map((item,index)=>{
			sectionHtml.push(
				<div className='index-section' key={index}>
					<header className='index-section-head'>
						<span className="title">{item.title}</span>
						<p className='sub-title'>{item.subTitle}</p>
					</header>
					<div className='index-section-body'>
						<div className='index-section-body-container'>
							<img className='index-section-body-img' src={item.icon}/>
							<div className='index-section-body-summary'>{item.summary}</div>
						</div>
					</div>
					<div className='index-section-footer'>
						<Link className="index-btn" to={`/home/about/${index}`}>全部</Link>
					</div>
				</div>
			);
		})

		//友情链接
		let friendLinkHtml = [];
		this.props.friendLinks.map((item, index)=>{
			friendLinkHtml.push(
					<a className='link' href={item.url} key={index} target="_blank">{item.name}</a>
				);
		})

		console.log(this.props.friendLinks)

		return(
			<div>
				<div>
					<Banner list={this.props.banner}/>
				</div>
				<div>{sectionHtml}</div>
				{/*友情链接*/}
				<div className='mt2'>
					<div className="sub-header"><span>友情链接</span></div>
					<div className='friend-links'>
						{friendLinkHtml}
					</div>
				</div>

				<div className='index-footer'>
					<p className='mb1'>&copy; 2017 GLOBAL TRADING CENTER 湘ICP备14018756</p>
					<p>长沙五十七度湘餐饮管理有限公司 <span style={{'color': '#ccc'}}>版权所有</span></p>
				</div>
			</div>
		)
	}
}

function selector(state){
	return {
		banner: state.home.banner,
		friendLinks: state.friendLinks.list,
		intros: state.intro.list
	}
}

export default connect(selector)(Index)