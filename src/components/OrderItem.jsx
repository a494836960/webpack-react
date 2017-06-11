import React,{Component} from 'react';
import {connect} from 'react-redux';

class OrderItem extends Component {

	constructor(props){
		super(props);
		this.state={
			order:{
				name:'孜然粉（01.30.0205）',
				model:'2.5KG/袋*4袋/箱',
				price: '567.40/箱',
				expired:'1年',
				number: 0
			}
		}
	}

	plusNum(){
		this.state.order.number++
		this.setState({})
	}

	minusNum(){
		this.state.order.number--
		if(this.state.order.number < 0){
			this.state.order.number = 0;
		}
		this.setState({})
	}

	render (){

		return (
			<li className='order-sub-item'>
				<div className='order-sub-left'>
					<p className='order-sub-name'> {this.state.order.name}</p>
					<p className='order-sub-model'>规格：{this.state.order.model}}</p>
					<p className='order-sub-price'>&yen; {this.state.order.price}</p>
				</div>
				<div className='order-sub-right'>
					<p className='order-sub-expired'>保质期：{this.state.order.expired}</p>
					<p className='order-sub-number'> 
						{this.state.order.number ? <i className='minus icon' onClick={this.minusNum.bind(this)}></i> : null}
						{this.state.order.number}
						 <i className='icon plus' onClick={this.plusNum.bind(this)}></i></p>
				</div>
			</li>
		);
	}
}

export default connect()(OrderItem)