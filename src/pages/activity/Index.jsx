import React, {Component} from 'react';
import Banner from 'component/Banner.jsx';
import tools from 'verdor/tools';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
class Index extends Component{
	
	constructor(props){
		super(props);
		this.state={
			bannerList: [],
			actives:[]
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title:'品牌活动'}));
		this.state.bannerList = [
			{
				url:null,
				banner:require('img/activity/banner.png')
			}
		]
	}

	componentDidMount(){

		tools.fetch({
			url:'/protal/mobile/active',
			method: 'GET'
		}).then(response=>{
			this.setState({
				actives: response.actives
			})
		});
	}

	goActive(id){
		this.props.router.push(`/news/detail/${id}`);
	}

	render(){
		let activesHtml = [];
		this.state.actives.map((item,index)=>{
			activesHtml.push(<Link key={index} onClick={this.goActive.bind(this,item.id)}>
								<img src={item.icon}/>
							</Link>);
		})

		return (
			<div>
				<Banner list = {this.state.bannerList}/>
				<div className='activity-item'>
					{activesHtml}
				</div>
			</div>
		);
	}
}

export default connect()(Index);