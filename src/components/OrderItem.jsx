import React,{Component} from 'react';
import {Link} from 'react-router';
import tools from 'verdor/tools';
import {connect} from 'react-redux';
import * as actions from 'action/Index';

 class OrderItem extends Component{

	//取消订单
	handleCancelOrder(id){
		tools.fetch({
			url:'/protal/mobile/cancel',
			data:{
				id:id
			}
		}).then(response=>{
			if(response.code == 'C1001'){
				this.props.dispatch(actions.showTips({txt:'订单取消成功！'}));
			}
		});
	}

	//确认收货
	handleCompleteOrder(){
		tools.fetch({
			url:'/protal/mobile/cancel',
			data:{
				id:id
			}
		}).then(response=>{
			if(response.code == 'C1001'){
				this.props.dispatch(actions.showTips({txt:'已确认收货！'}));
				this.set
			}
		});
	}

	render(){
		let order =this.props.order;
		let status = tools.converOrderStatus(order.status);

		return(
			<div className='ordered-item'>
				<div className='ordered-item-body'>
					<p>
						<span className='ordered-item-name'>{`${order.brand.name} ${order.type=='sauce'?'酱料订单':'物料订单'}`}</span>
						<span className='ordered-item-status'>{status}</span>
					</p>
					<p><span className='ordered-item-date'>{tools.formatterDate(order.createDate)}</span></p>
					<p><span className='ordered-item-number'>订单号：{order.sn}</span></p>
				</div>
				<div className='ordered-item-footer'>
					<Link className='btn btn-ghost btn-primary' to={`/order/detail/${order.id}`}>订单详情</Link>
					{order.status > 60 ? null : <span className='btn btn-ghost btn-dangerous' onClick={this.handleCancelOrder.bind(this,order.id)}>取消订单</span>}
					{order.status == 80 ? <span className='btn btn-ghost btn-dangerous' onClick={this.handleCompleteOrder.bind(this,order.id)}>确认收货</span> : null}
				</div>
			</div>
		);
	}
} 

export default connect()(OrderItem);