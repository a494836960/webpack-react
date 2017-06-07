import React,{Component} from 'react';

export default class NewsItem extends Component {
	
	render(){
		this.props
		return (<div className='news-item'>
			<img/>
			<div>
				<div>{this.props.item.title}</div>
				<div>{this.props.item.summary}</div>
				<div>{this.props.item.date}</div>
			</div>
		</div>);
	}
}