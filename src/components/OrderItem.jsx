import React,{Component} from 'react';
import {Link} from 'react-router';

export default class OrderItem extends Component{
	render(){
		return(
			<div className='ordered-item'>
				<div className='ordered-item-body'>
					<p>
						<span className='ordered-item-name'>57加盟店酱料订单</span>
						<span className='ordered-item-status'>订单正在审核中</span>
					</p>
					<p><span className='ordered-item-date'>2017-05-23 12:27</span></p>
					<p><span className='ordered-item-number'>订单号：40021545</span></p>
				</div>
				<div className='ordered-item-footer'>
					<Link className='btn btn-ghost btn-primary' to='/order/detail/1'>订单详情</Link>
					<span className='btn btn-ghost btn-dangerous' onClick={this.onClick}>删除订单</span>
				</div>
			</div>
		);
	}
} 