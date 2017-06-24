import React, {Component} from 'react';
import Banner from 'component/Banner.jsx';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
import RecruitItem from 'component/RecruitItem'

class Index extends Component{
	
	constructor(props){
		super(props);
		this.state={
			bannerList: []
		}
	}

	componentDidMount(){

		this.props.dispatch(actions.setHead({title:'校园招聘'}));

		this.state.bannerList = [
			{
				url:null,
				banner:require('img/recruitment/school-l.jpg')
			}
		];
		this.setState({});	
	}

	render(){

		return (
			<div>
				<Banner list = {this.state.bannerList}/>
				<div>
					<RecruitItem/>
				</div>
			</div>
		);
	}
}

export default connect()(Index);