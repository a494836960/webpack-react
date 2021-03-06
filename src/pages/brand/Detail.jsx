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
		this.props.dispatch(actions.setHead({title:'旗下品牌'}));
	}

	componentDidMount(){
		tools.fetch({
			url:'/protal/mobile/brandDetail?id='+this.props.params.id,
			method: 'GET'
		}).then(response=>{
			this.setState({
				articleContent: response.brand.introduction
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