import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
import　Banner from 'component/Banner'
import TimeLine from 'component/TimeLine'

class Index extends Component{
	
	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '发展历程'}))
	}

	render(){

		let banner = [{
			banner: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg',
			url: null
		}];

		return (
			<div>
				<Banner list={banner}/>
				<TimeLine />
				<TimeLine cls = 'mt2'/>
			</div>
		);
	}
}

export default connect()(Index);