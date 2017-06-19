import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
import　Banner from 'component/Banner'
import TimeLine from 'component/TimeLine'

class Index extends Component{
	
	constructor(props){
		super(props);
		this.state={
			banner: []
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '发展历程'}))
	}


	componentDidMount(){
		let banner = [{
			banner: require('img/index/development.png'),
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
				<TimeLine />
				<TimeLine cls = 'mt2'/>
			</div>
		);
	}
}

export default connect()(Index);