import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import tools from 'verdor/tools';
class Submit extends Component{

	constructor(props){
		super(props);
		this.state={
			address:'',
			name:'',
			mobile:''
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '提交订单'}));
	}

	componentDidMount(){
		tools.fetch({
			url:`/protal/mobile/receivers`,
			method:'get'
		}).then(response=>{
			let data = response.receivers[0];
			this.setState({
				address: data.areaName+data.address,
				receiverId: data.id,
				mobile: data.mobile,
				name: data.consignee
			});
		});
	}

	submitOrder(){
		
		let data = this.props.location.state;
		let orderArr = [];
		data.order.map((item,index)=>{
			if(item.number != 0){
				orderArr.push(item.id+"#"+item.number);
			}
		});
		if(this.state.fet){
			return;
		}
		this.state.fet = true
		tools.fetch({
				url:`/protal/mobile/submitOrder`,
				data:{
					type:data.order[0].type,
					brandMaterielOrderItems:orderArr,
					receiverId: this.state.receiverId,
				}
		}).then(response=>{

			if(response.code == 'C1001'){
				this.props.dispatch(actions.showTips({txt:'提交成功'}));
				setTimeout(()=>{
					this.props.router.go(-1);
				},800);
			}else{
				this.state.fet = true
			}
		});
	}

	render(){
		let data = this.props.location.state;
		let items = [];
		data.order.map((item,index)=>{
			if(item.number != 0){
				items.push(<dd className='detail-list-item' key={index}> 
						<span className='detail-list-item-left'>{item.name}</span>  
						<span className='detail-list-item-right'>
							<span className='number'>x{item.number}</span><span className="price">&yen;{item.money}</span>
						</span>
					</dd>)
			}
		});

		

		return(
			<div style={{paddingBottom:'.3rem'}}>
				<dl className = 'detail-list'>
					<dt className='detail-list-head'>{data.name}</dt>
						{items}
					<dt className='detail-list-head tr'>合计：<span className='price'>&yen;{data.price}</span></dt>
				</dl>

				<dl className = 'detail-list'>
					<dt className='detail-list-head'>配送信息</dt>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>收货地址：</span>  
						<span className='detail-list-item-right tl'>
							{this.state.address}
						</span>
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>收货人：</span>  
						<span className='detail-list-item-right tl'>
							{this.state.name}
						</span>  
					</dd>
					<dd className='detail-list-item'> 
						<span className='detail-list-item-left'>联系方式：</span>  
						<span className='detail-list-item-right tl'>
							{this.state.mobile}
						</span>  
					</dd>
				</dl>

				<div style={{margin:'0 .3rem'}}>
					<div className='btn btn-primary btn-block mt3' onClick={this.submitOrder.bind(this)}>提交订单</div>
				</div>
			</div>
		);
	}
}

export default connect()(Submit);