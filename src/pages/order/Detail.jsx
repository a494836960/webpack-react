import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import tools from 'verdor/tools'

class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			items:[],
			logs:[{}]
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '订单详情',cls:'order-head'}));
	}

	componentDidMount(){
		tools.fetch({
			url:'/protal/mobile/ordersDetail?id='+this.props.params.id,
			method: 'get'
		}).then((response)=>{
			let data = response.brandMaterielOrder;
			this.setState({
				title: data.brand.name+ (data.type=="sauce"? '酱料订单' : '物料订单'),
				date: tools.formatterDate(data.createDate),
				status: data.status,
				sn: data.sn,
				items: data.orderItems,
				consignee: data.consignee,
				address: data.areaName + data.address,
				mobile: data.mobile,
				price: data.price,
				logs: data.logs
			})
		});
	}

	render(){

		let orderItemsHtml = [];

		this.state.items.map((item,index)=>{
			orderItemsHtml.push(<dd className='detail-list-item' key={index}> 
						<span className='detail-list-item-left'>{item.name}</span>  
						<span className='detail-list-item-right'>
							<span className='number'>x{item.quantity}</span><span className="price">&yen;{item.price}</span>
						</span>
					</dd>)
		})
		
		let status = tools.converOrderStatus(this.state.status);

		return(
			<div style={{paddingBottom:'.3rem'}}>
				<div className='order-info'>
					<img className='bg-img' src={require('img/order/order-bg.png')}/>
					<div className='order-info-body'>
						<img className='small-icon' src={require('img/order/small-icon.png')} alt="" />
						<div className='order-info-content'>
							<p className='title'>{this.state.title}</p>
							<p className='date'>下单时间：{this.state.date}</p>
						</div>
					</div>
					<div className='order-info-footer'>	
						<span className='order-number'> <i className='iconfont'>&#xe622;</i> 订单号：{this.state.sn}</span> <span style={{color:'#555'}}>{status}</span>
					</div>
				</div>
				<dl className = 'detail-list'>
					{orderItemsHtml}
					<dt className='detail-list-head tr'>合计：<span className='price'>&yen;{this.state.price}</span></dt>
				</dl>

				<dl className = 'detail-list'>
					<dt className='detail-list-head'>配送信息</dt>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>收获地址：</span>  
						<span className='detail-list-item-right tl'>
							{this.state.address}
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>收货人：</span>  
						<span className='detail-list-item-right tl'>
							{this.state.consignee}
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>联系方式</span>  
						<span className='detail-list-item-right tl'>
							{this.state.mobile}
						</span>
					</dd>
					{this.state.status == 110 ? <dd className='detail-list-item'> 
						<span className='detail-list-item-left'>失败原因：</span>  
						<span className='detail-list-item-right tl'>
							{this.state.logs[0].operation}
						</span>
					</dd> : null}
				</dl>
			</div>
		);
	}
}

export default connect()(Detail);