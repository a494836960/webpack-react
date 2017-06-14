 import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
import OrderItem from 'component/OrderItem'

class OrderSearch extends Component{

	constructor(props){
		super(props);
		this.state={
			
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '我的订单'}))
	}

	render(){
		return <div className='ordered-list'>
			<OrderItem/>
			<OrderItem/>
			<OrderItem/>
			<OrderItem/>
			<OrderItem/>
		</div>;
	}
}

export default connect()(OrderSearch);