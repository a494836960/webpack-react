import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import Banner from 'component/Banner';
import NewsItem from 'component/NewsItem'

class Index extends Component{

	constructor(props){
		super(props);
		this.state={
			banner : [],
			newsList: [{
				id:'1',
				title: '中国人民共和国成立',
				summary:'毛主席宣布中国人民共和国成立啦',
				date: '10月1日',
				pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg'
			},{
				id:'1',
				title: '中国人民共和国成立',
				summary:'毛主席宣布中国人民共和国成立啦',
				date: '10月1日',
				pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg'
			},{
				id:'1',
				title: '中国人民共和国成立',
				summary:'毛主席宣布中国人民共和国成立啦',
				date: '10月1日',
				pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg'
			},{
				id:'1',
				title: '中国人民共和国成立',
				summary:'毛主席宣布中国人民共和国成立啦',
				date: '10月1日',
				pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg'
			},{
				id:'1',
				title: '中国人民共和国成立',
				summary:'毛主席宣布中国人民共和国成立啦',
				date: '10月1日',
				pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg'
			},{
				id:'1',
				title: '中国人民共和国成立',
				summary:'毛主席宣布中国人民共和国成立啦',
				date: '10月1日',
				pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg'
			},{
				id:'1',
				title: '中国人民共和国成立',
				summary:'毛主席宣布中国人民共和国成立啦',
				date: '10月1日',
				pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg'
			},{
				id:'1',
				title: '中国人民共和国成立',
				summary:'毛主席宣布中国人民共和国成立啦',
				date: '10月1日',
				pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg'
			}]
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '资讯动态'}));
	}

	componentDidMount(){
		let banner = [{
			banner: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg',
			url: null
		},{
			banner: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg',
			url: null
		},{
			banner: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg',
			url: null
		}];

		this.setState({
			banner: banner
		})
	}

	render(){
		let newsHtml = []
		this.state.newsList.map((item,index)=>{
			newsHtml.push(<NewsItem key={index} item={item}/>)
		})

		return (
			<div>
				<Banner list={this.state.banner}/>
				<div className='news-list'>
					{newsHtml}
				</div>
			</div>
		);
	}
}

export default connect()(Index)
