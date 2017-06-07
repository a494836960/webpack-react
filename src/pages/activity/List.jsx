import React, {Component} from 'react';
import Banner from 'component/Banner.jsx';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
class List extends Component{
	
	constructor(props){
		super(props);
		this.state={
			bannerList: []
		}
	}

	componentDidMount(){

		this.props.dispatch(actions.setHead({title:'品牌活动'}));

		this.state.bannerList = [
			{
				url:null,
				banner:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=102656704,3745576430&fm=117&gp=0.jpg'
			}
		];
		this.setState({});	
	}

	render(){

		return (
			<div>
				<Banner list = {this.state.bannerList}/>
				<div className='activity-item'>
					<Link>
						<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=102656704,3745576430&fm=117&gp=0.jpg"/>
					</Link>
				</div>
			</div>
		);
	}
}

export default connect()(List);