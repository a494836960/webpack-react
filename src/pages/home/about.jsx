 import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
import Banner from 'component/Banner'
import ArticleDetail from 'component/ArticleDetail'
class About extends Component{
	
	constructor(props){
		super(props);
		this.state={
			banner: []
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '研发团队'}))
	}


	componentDidMount(){
		let banner = [{
			banner: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg',
			url: null
		}];

		this.setState({
			banner: banner
		})
	}

	render(){

		return (
			<div>
				<Banner list={this.state.banner}/>
				<ArticleDetail articleContent={<p>ffff</p>}/>
			</div>
		);
	}
}

export default connect()(About);