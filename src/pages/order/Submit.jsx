import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';

class Submit extends Component{

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '提交订单'}));
	}

	render(){
		let data = this.props.location.state;
		let items = [];
		data.order.subList.map((item,index)=>{
			if(item.number != 0){
				items.push(<dd className='detail-list-item' key={index}> 
						<span className='detail-list-item-left'>{item.name}</span>  
						<span className='detail-list-item-right'>
							<span className='number'>x{item.number}</span><span className="price">&yen;{item.price}</span>
						</span>
					</dd>)
			}
		});

		

		return(
			<div style={{paddingBottom:'.3rem'}}>
				<dl className = 'detail-list'>
					<dt className='detail-list-head'>{data.order.name}</dt>
						{items}
					<dt className='detail-list-head tr'>合计：<span className='price'>&yen;{data.price}</span></dt>
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
						<input className='detail-list-item-right' placeholder='请输入收货人' />
							
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>制单人：</span>  
						<input className='detail-list-item-right'  placeholder='请输入制单人'  />
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>门店电话：</span>  
						<input className='detail-list-item-right'  placeholder='请输入门店电话'  />
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>授权审核人：</span>  
						<input className='detail-list-item-right'  placeholder='请输入授权审核人'  />
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>审核日期：</span>  
						<span className='detail-list-item-right'></span>
					</dd>
				</dl>

				<div className='btn btn-primary btn-block mt3'>提交订单</div>
			</div>
		);
	}
}

export default connect()(Submit);