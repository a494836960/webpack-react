import React, {Component} from 'react';
import Banner from 'component/Banner.jsx';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
class Index extends Component{
	
	constructor(props){
		super(props);
		this.state={
			bannerList: [],
			brandList: []
		}
	}

	componentDidMount(){

		this.props.dispatch(actions.setHead({title:'旗下品牌'}));

		this.state.bannerList = [
			{
				url:null,
				banner: require('img/brand/banner.png')
			}
		];

		this.state.brandList=[
			{
				id:'1',
				name:'小猪猪',
				pic:require('img/brand/1.png')
			},
			{
				id:'2',
				name:'小猪猪',
				pic:require('img/brand/2.png')
			},
			{
				id:'3',
				name:'小猪猪',
				pic:require('img/brand/3.png')
			},{
				id:'4',
				name:'小猪猪',
				pic:require('img/brand/4.png')
			}
		]

		this.setState({});	
	}

	render(){
		let brandList = [];
		this.state.brandList.map((item, index)=>{
			brandList.push(<div className='brand-item' key = {index}>
				<img className='brand-item-pic' src={item.pic}/>
				<p className='brand-item-name'>{item.name}</p>
			</div>)
		})

		return (
			<div>
				<Banner list = {this.state.bannerList}/>
				<ul className='brand-list'>
					{brandList}
				</ul>
			</div>
		)
	}
}

export default connect()(Index)