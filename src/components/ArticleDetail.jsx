import React,{Component} from 'react';

export default class ArticleDetail extends Component{
	constructor(props){
		super(props);
		this.state={
			articleContent: this.props.articleContent
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			articleContent: nextProps.articleContent
		})
	}

	render(){
		return (
			<div className='article-body' dangerouslySetInnerHTML={{__html: this.state.articleContent}}>

			</div>
		);
	}
}