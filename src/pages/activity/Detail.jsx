import React,{Component} from 'react';
import ArticleDetail from 'component/ArticleDetail';
import tools from 'verdor/tools';
import {connect} from 'react-redux';
import * as actions from 'action/Index'

class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			articleContent: ''
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title:'活动详情'}));
	}

	componentDidMount(){
		tools.fetch({
			url:'/protal/mobile/activeDetail?id='+this.props.params.id,
			method: 'GET'
		}).then(response=>{
			this.setState({
				articleContent: response.article.content
			})
		});
		
	}

	render(){
		return (
			<div className='article'>
				<ArticleDetail articleContent={this.state.articleContent}/>
			</div>
		);
	}
}

export default connect()(Detail)