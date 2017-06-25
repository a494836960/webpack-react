import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import Banner from 'component/Banner';
import NewsItem from 'component/NewsItem';
import PullLoadMore from 'component/pullLoadMore';

class Index extends Component{

	constructor(props){
		super(props);
		this.state={
			banner : []
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '资讯动态'}));
		this.props.dispatch(actions.getNews());
		this.props.dispatch(actions.getNewsAd());

		this.state.interval = setInterval(()=>{
			this.setState({}); 
		},2000);
	}

	componentWillUnmount(){
		clearInterval(this.state.interval);
	}

	componentWillReceiveProps(props){
		if(this.props.news.length != props.news.length){
			this.setState({});
		}
	}

	render(){
		let newsHtml = []
		this.props.news.map((item,index)=>{
			newsHtml.push(<NewsItem key={index} item={item}/>)
		})
		 
		let config = {
			data: newsHtml,
			id:'wrapList',
			loadMore:()=>{
				this.props.dispatch(actions.getNews(1));
			}
		}
		
		return (
			<div style={{height:'100%'}}>
				<Banner list={this.props.banner}/>
				<div className='news-list' style={{height:'100%'}}>
					<PullLoadMore config={config}/>
				</div>
			</div>
		);
	}
}

function selector(state){
	console.log(state)
	return {
		news: state.news.list,
		banner: state.newsAd.list
	}
}

export default connect(selector)(Index)
