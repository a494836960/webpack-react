import React,{Component} from 'react';
import {hashHistory} from 'react-router'

export default class NewsItem extends Component {
	

	goDetail(){
		hashHistory.push(`/news/detail/${this.props.item.id}`);
	}

	render(){
		return (<div className='news-item' onClick={this.goDetail.bind(this)}>
			<img className='news-item-img' src={this.props.item.pic}/>
			<div className="news-item-content">
				<div className="news-item-title">{this.props.item.title}</div>
				<div className="news-item-summary">{this.props.item.summary}</div>
				<div className="news-item-date">{this.props.item.date}</div>
			</div>
		</div>);
	}
}

NewsItem.defaultProps={
	item:{
		id:'',
		pic:'',
		title:'',
		summary:'',
		date:''
	}
}