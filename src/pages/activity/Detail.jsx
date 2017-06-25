import React,{Component} from 'react';
import tools from 'verdor/tools';
import {connect} from 'react-redux';
import * as actions from 'action/Index';

class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			articleContent: ''
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title:"活动详情"}));
	}

	componentDidMount(){
		tools.fetch({
			url:'/protal/mobile/activeDetail?id='+this.props.params.id,
			method: 'GET'
		}).then(response=>{
			this.setState({
				articleContent: response.article.content,
				title:  response.article.title,
				date: response.article.createDate
			})
		});
		
	}

	render(){

		return (
			<div className='article'>
				<header className='article-head'>
					<h1 className='article-title'>{this.state.title}</h1>
					<div className='article-intro'>
						<span className='article-intro-date'>
							时间：{tools.formatterDate(this.state.date)}
						</span>
					</div>
				</header>
				<div className='article-body' dangerouslySetInnerHTML={{__html: this.state.articleContent}}>
					 
				</div>
			</div>
		);
	}
}

export default connect()(Detail);