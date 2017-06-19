import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';

class Detail extends Component{

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '订单详情',cls:'order-head'}));
	}

	render(){
		return(
			<div style={{paddingBottom:'.3rem'}}>
				<div className='order-info'>
					<img className='bg-img' src={require('img/order/order-bg.png')}/>
					<div className='order-info-body'>
						<img className='small-icon' src={require('img/order/small-icon.png')} alt="" />
						<div className='order-info-content'>
							<p className='title'>57加盟店酱料订单</p>
							<p className='date'>下单时间：2017-6-1 15：30</p>
						</div>
					</div>
					<div className='order-info-footer'>	
						<span className='order-number'> <i className='iconfont'>&#xe622;</i> 订单号：6546465465</span> <span style={{color:'#555'}}>正在审核</span>
					</div>
				</div>
				<dl className = 'detail-list'>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>酱辣子（12333）</span>  
						<span className='detail-list-item-right'>
							<span className='number'>x1</span><span className="price">&yen;280/箱</span>
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>酱辣子（12333）</span>  
						<span className='detail-list-item-right'>
							<span className='number'>x1</span><span className="price">&yen;280/箱</span>
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>酱辣子（12333）</span>  
						<span className='detail-list-item-right'>
							<span className='number'>x1</span><span className="price">&yen;280/箱</span>
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>酱辣子（12333）</span>  
						<span className='detail-list-item-right'>
							<span className='number'>x1</span><span className="price">&yen;280/箱</span>
						</span>
					</dd>
					<dt className='detail-list-head tr'>合计：<span className='price'>&yen;285</span></dt>
				</dl>

				<dl className = 'detail-list'>
					<dt className='detail-list-head'>配送信息</dt>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>收获地址：</span>  
						<span className='detail-list-item-right'>
							福建省闽侯县青口镇虎山村厦铁路78号凤岗 村阳历路老人会的旁边
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>收货人：</span>  
						<span className='detail-list-item-right'>
							施威
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>制单人：</span>  
						<span className='detail-list-item-right'>
							施威
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>门店电话：</span>  
						<span className='detail-list-item-right'>
							13410960094
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>授权审核人：</span>  
						<span className='detail-list-item-right'>
							哈哈
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>审核日期：</span>  
						<span className='detail-list-item-right'>
							2017/06/11
						</span>
					</dd>
				</dl>

				<div className='btn btn-primary btn-block mt3'>提交订单</div>
			</div>
		);
	}
}

export default connect()(Detail);