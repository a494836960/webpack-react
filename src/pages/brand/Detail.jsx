import React,{Component} from 'react';
import ArticleDetail from 'component/ArticleDetail'

export default class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			articleContent: ''
		}
	}

	componentWillMount(){
		console.log('componentDidMount')
	}

	componentDidMount(){
		this.setState({
			articleContent: "<p>balabalabalabala.......</p><p>balalababalalaba....</p>"
		})
	}

	render(){
		return (
			<div className='article'>
				<ArticleDetail articleContent={this.state.articleContent}/>
			</div>
		);
	}
}