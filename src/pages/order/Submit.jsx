import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';

class Submit extends Component{

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '提交订单'}));
	}

	render(){
		return(
			<div style={{paddingBottom:'.3rem'}}>
				<dl className = 'detail-list'>
					<dt className='detail-list-head'>57加盟店酱料订单</dt>
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

export default connect()(Submit);