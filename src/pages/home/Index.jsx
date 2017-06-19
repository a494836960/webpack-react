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

 		this.state.bannerList = [
			{
				url:null,
				banner: require('img/brand/banner.png')
			},
			{
				url:null,
				banner: require('img/brand/banner.png')
			}
			,{
				url:null,
				banner: require('img/brand/banner.png')
			}
		];

 	}

 	componentDidMount(){
 	
 		this.state.sections = [
 			{
 				title:'关于我们',
 				subTitle:'ABOUT US',
 				url: '/home/about',
 				pic: require('img/index/about.png')
 			},
 			{
 				title:'发展历程',
 				subTitle:'DEVELOPMENT',
 				url: '/home/development',
 				pic: require('img/index/development.png')
 			}
 		]


 		this.setState({});
 	}

	showMenu(){
		this.props.dispatch(actions.toggleMenu());
	}

	render(){
		console.log(this.props.banner);
		let sectionHtml = [];
		this.state.sections.map((item,index)=>{
			sectionHtml.push(
				<div className='index-section' key={index}>
					<header className='index-section-head'>
						<span className="title">{item.title}</span>
						<p className='sub-title'>{item.subTitle}</p>
					</header>
					<div className='index-section-body'>
						<div className='index-section-body-container'>
							<img className='index-section-body-img' src={item.pic}/>
							<div className='index-section-body-summary'>{item.summary}</div>
						</div>
					</div>
					<div className='index-section-footer'>
						<Link className="index-btn" to={item.url}>全部</Link>
					</div>
				</div>
			);
		})

		return(
			<div>
				<div>
					<Banner list={this.state.bannerList}/>
				</div>
				<div>{sectionHtml}
					{/*资质荣誉*/}
					<div className='index-section'>
						<header className='index-section-head'>
							<span className="title">资质荣誉</span>
							<p className='sub-title'>QUALIFICATION</p>
						</header>
						<div className='index-section-body'>
							<div className='index-section-body-container nbb'>
								<div className='panel-list'>
									<div className='panel'>
										<div className="date">2008-12-15</div>
										<div className="title">中国烹饪协会</div>
										<div className='content'>
											经我会讨论通过，批准你单位为中国烹饪协会正式会员。从即日起享有本协会成员的一切权利和承担应有的义务。 湘0051会员资格有效期二年
										</div>
									</div>
									<div className='panel'>
										<div className="date">2008-12-15</div>
										<div className="title">中国烹饪协会</div>
										<div className='content'>
											经我会讨论通过，批准你单位为中国烹饪协会正式会员。从即日起享有本协会成员的一切权利和承担应有的义务。 湘0051会员资格有效期二年
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='index-section-footer'>
							<Link className="index-btn" to='/home/Qualification'>全部</Link>
						</div>
					</div>
					{/*资质荣誉*/}

					{/*专业研发团队*/}
					<div className='index-section team'>
						<header className='index-section-head'>
							<span className="title">专业研发团队</span>
							<p className='sub-title'>PROFESSIONAL</p>
						</header>
						<div className='index-section-body'>
							<div className='info-card'>
								<img className='info-card-img' src=''/>
								<div className='info-card-content'>
									<div className='info-card-title'>邵覃宏</div>
									<div className='info-card-summary'>经我会讨论通过，批准你单位为中国烹饪协会正式会员。从即日起享有本协会成员的一切权利和承担应有的义务。</div>
								</div>
							</div>
							<div className='info-card'>
								<img className='info-card-img' src=''/>
								<div className='info-card-content'>
									<div className='info-card-title'>邵覃宏</div>
									<div className='info-card-summary'>经我会讨论通过，批准你单位为中国烹饪协会正式会员。从即日起享有本协会成员的一切权利和承担应有的义务。</div>
								</div>
							</div>
						</div>
						<div className='index-section-footer'>
							<Link className="index-btn" to='/home/professional'>全部</Link>
						</div>
					</div> 
					{/*专业研发团队*/}
				</div>
				{/*友情链接*/}
				<div className='mt2'>
					<div className="sub-header"><span>友情链接</span></div>
					<div className='friend-links'>
						<Link className='link'>吃饭皇帝大</Link>
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
		banner: state.home.banner
	}
}

export default connect(selector)(Index)