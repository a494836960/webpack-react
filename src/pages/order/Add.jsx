import React,{Component} from 'react';
import Banner from 'component/Banner';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import GoodsItem from 'component/GoodsItem'

class Add extends Component{

	constructor(props){
		super(props);
		this.state={
			banner:[],
			currIndex: 0,
			order:[
				{
					id:'1',
					name:'吃饭皇帝大',
					subList:[{
							id:'101',
							name:'孜然粉（01.30.0205）',
							model:'2.5KG/袋*4袋/箱',
							price: '567.40/箱',
							expired:'1年',
							number: 0,
							money: 567.40
						},
						{
							id:'102',
							name:'孜然粉2（01.30.0205）',
							model:'2.5KG/袋*4袋/箱',
							price: '567.40/箱',
							expired:'1年',
							number: 0,
							money: 567.40
						},
						{
							id:'103',
							name:'孜然粉3（01.30.0205）',
							model:'2.5KG/袋*4袋/箱',
							price: '567.40/箱',
							expired:'1年',
							number: 0,
							money: 567.40
						}
					]
				},
				{
					id:'2',
					name:'铁板烧',
					subList:[{
							id:'201',
							name:'孜然粉（01.30.0205）',
							model:'2.5KG/袋*4袋/箱',
							price: '567.40/箱',
							expired:'1年',
							number: 0,
							money: 567.40
						},
						{
							id:'202',
							name:'孜然粉2（01.30.0205）',
							model:'2.5KG/袋*4袋/箱',
							price: '567.40/箱',
							expired:'1年',
							number: 0,
							money: 567.40
						},
						{
							id:'203',
							name:'孜然粉3（01.30.0205）',
							model:'2.5KG/袋*4袋/箱',
							price: '567.40/箱',
							expired:'1年',
							number: 0,
							money: 567.40
						}
					]
				}
			]
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '提交订单'}));
		this.state.banner = [{
			banner: require('img/order/banner.png'),
			url:''
		}]
	}

	/*提交订单*/
	handleSubmit(){
		let order = this.state.order[this.state.currIndex];
		let price = 0;
		order.subList.map((item,index)=>{
			price+=item.money*item.number;
		});
		
		price = price.toFixed(2);
		this.props.router.push({
			pathname:'/order/submit',
			state:{
				price: price,
				order: order
			}
		});
	}

	switchLeft(index){
		this.setState({
			currIndex: index
		});
	}

	render(){
		let leftList = [];
		let rightList = [];
		this.state.order.map((item,index)=>{
			leftList.push(<li key={index} className={`${this.state.currIndex == index ? 'active' : ''} item`} onClick={this.switchLeft.bind(this,index)}>{item.name}</li>);

			if(this.state.currIndex == index){
				item.subList.map((item,index)=>{
					rightList.push(<GoodsItem key={index} order={item}/>);
				})
			}
		})
		return (
			<div style={{height:'100%'}}>
				<div className='order-add-wrapper'>
					<Banner list={this.state.banner}/>
					<div className='order-container'>
						<ul className='order-menu'>
							{leftList}
						</ul>
						<ul className='order-sub-list'>
							{rightList}
						</ul>
					</div>
					<div className="order-btn-submit" onClick={this.handleSubmit.bind(this)}>
						<span >提交订单</span>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Add);