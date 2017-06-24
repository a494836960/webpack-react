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
		this.props.dispatch(actions.getBrand());
		this.state.bannerList = [
			{
				url:null,
				banner: require('img/brand/banner.png')
			}
		];
		this.setState({});
	}

	goDetail(id){
		this.props.router.push(`/brand/detail/${id}`)
	}


	render(){
		let brandList = [];
		this.props.subBrands.map((item, index)=>{
			brandList.push(<div className='brand-item' key = {index} onClick={this.goDetail.bind(this,item.id)}>
				<img className='brand-item-pic' src={item.logo}/>
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

function selector(state){
	console.log(state)
	return {
		subBrands: state.brand.list
	}
}

export default connect(selector)(Index)