import React,{Component} from 'react';
import Banner from 'component/Banner';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import GoodsItem from 'component/GoodsItem'

class Add extends Component{

	constructor(props){
		super(props);
		this.state={
			banner:[],
			order:{

			}
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '提交订单'}));
		this.state.banner = [{
			banner: require('img/order/banner.png'),
			url:''
		}]
	}

	/*提交订单*/
	handleSubmit(){
		this.props.router('/order/submit');
	}

	render(){
		return (
			<div style={{paddingBottom: '.8rem'}}>
				<div style={{paddingBottom:'1rem'}}>
					<Banner list={this.state.banner}/>
					<div className='order-container'>
						<ul className='order-menu'>
							<li className='item'>57加盟店酱料订单</li>
							<li className='item active'>57加盟店酱料订单</li>
							<li className='item'>57加盟店酱料订单</li>
							<li className='item'>57加盟店酱料订单</li>
							<li className='item active'>57加盟店酱料订单</li>
							<li className='item'>57加盟店酱料订单</li>
							<li className='item'>57加盟店酱料订单</li>
						</ul>
						<ul className='order-sub-list'>
							<GoodsItem/>
						</ul>
					</div>
				</div>
				<div className="order-btn-submit" onClick={this.handleSubmit.bind(this)}>
					<span >提交订单</span>
				</div>
			</div>
		);
	}
}

export default connect()(Add);