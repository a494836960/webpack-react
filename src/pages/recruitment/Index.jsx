import React, {Component} from 'react';
import Banner from 'component/Banner.jsx';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
class Index extends Component{
	
	constructor(props){
		super(props);
		this.state={
			bannerList: []
		}
	}

	componentDidMount(){

		this.props.dispatch(actions.setHead({title:'人才招聘'}));

		this.state.bannerList = [
			{
				url:null,
				banner:require('img/recruitment/index.jpg')
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
						<img src={require('img/recruitment/world-s.png')}/>
					</Link>
				</div>

				<div className='activity-item'>
					<Link>
						<img src={require('img/recruitment/school-s.png')}/>
					</Link>
				</div>
			</div>
		);
	}
}

export default connect()(Index);