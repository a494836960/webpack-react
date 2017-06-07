import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import Banner from 'component/Banner'

class Index extends Component{

	constructor(props){
		super(props);
		this.state={
			bannerList : [],
			newsList: []
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '资讯动态'}));

	}

	render(){
		let newsHtml = []
		this.state.newsList.map((item,index)=>{
			newsHtml.push()
		})

		return (
			<Banner list={this.state.bannerList}/>
			<div>
				
			</div>
		);
	}
}

export default connect()(Index)
