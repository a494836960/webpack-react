 import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
import OrderItem from 'component/OrderItem';
import Loading from 'component/Loading';
import PullLoadMore from 'component/pullLoadMore'

class OrderSearch extends Component{

	constructor(props){
		super(props);
		this.state={
			
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '我的订单'}));
		this.props.dispatch(actions.getMyOrder());

		this.state.interval = setInterval(()=>{
			this.setState({}); 
		},2000);
	}

	componentWillUnmount(){
		clearInterval(this.state.interval);
	}

	componentWillReceiveProps(props){
		console.log(this.props.myOrders.length,props.myOrders.length,'componentReceiveProps');
		if(this.props.myOrders.length != props.myOrders.length){
			this.setState({});
		}
	}

	render(){
		if(this.props.isFetching){
			return <Loading />
		}
		let myOrderHtml = [];
		this.props.myOrders.map((item,index)=>{
			myOrderHtml.push(<OrderItem key={index} order = {item}/>)
		})
		
		let config = {
			data: myOrderHtml,
			id:'wrapList',
			loadMore:()=>{
				this.props.dispatch(actions.getMyOrder(1));
			}
		}

		return <div className='ordered-list' style={{height:'100%'}}>
			<PullLoadMore config={config}/>
		</div>;
	}

	loadMore(){
		this.props.dispatch(actions.getMyOrder());
	}
}

function selector(state){
	return{
		myOrders: state.myOrder.list,
		isFetching: state.myOrder.isFetching,
	}
}

export default connect(selector)(OrderSearch);