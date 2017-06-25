import React,{Component} from 'react';
import Banner from 'component/Banner';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import GoodsItem from 'component/GoodsItem';
import tools from 'verdor/tools';
import Loading from 'component/Loading'
class Add extends Component{

	constructor(props){
		super(props);
		this.state={
			banner:[],
			currIndex: 0,
			rightList:[],
			showData: false
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '提交订单'}));
		this.state.banner = [{
			banner: require('img/order/banner.png'),
			url:''
		}]
	}

	componentDidMount(){
		this.props.dispatch(actions.getAllBrands());
	}

	componentWillUpdate(props){
		if(this.props.leftData.length == 0 && props.leftData != 0){
			this.switchLeft(0,props.leftData[0].brandsId,props.leftData[0].type);
		}else if(this.props.leftData.length != 0 && !this.state.showData){
			this.switchLeft(0,props.leftData[0].brandsId,props.leftData[0].type);
		}
	}

	/*提交订单*/
	handleSubmit(){
		let order = this.state.rightList[this.state.key];
		let price = 0;
		order.map((item,index)=>{
			price+=item.money*item.number;
		});
		
		price = price.toFixed(2);
		this.props.router.push({
			pathname:'/order/submit',
			state:{
				price: price,
				order: order,
				name: this.props.leftData[this.state.currIndex].name
			}
		});
	}

	switchLeft(index,id,type){
		let key = id+type;
		
		if(this.state.rightList[key]){
			this.setState({
					currIndex: index,
					key: key,
					showData: true
				});
		}else{
			tools.fetch({
				url:`/protal/mobile/${id}/${type}`,
				method:'get'
			}).then(response=>{
				let rightList = [];
				 response.brandMateriels.map((item,index)=>{
				 	rightList.push({
				 		name: item.name,
				 		model: item.specification,
				 		price: item.price+item.unit,
				 		money: item.price,
				 		expired: item.expirationDate+"月",
				 		number:0,
				 		id: item.id,
				 		type: type
				 	});
				 })

				this.state.rightList[key] =rightList;
				this.setState({
					currIndex: index,
					key: key,
					showData: true
				});
			});
		}
	}

	render(){
		let leftList = [];
		let rightList = [];
		if(!this.state.showData){
			return <Loading/>;
		}
		this.props.leftData.map((item,index)=>{
			leftList.push(<li key={index} className={`${this.state.currIndex == index ? 'active' : ''} item`}
				onClick={this.switchLeft.bind(this,index,item.brandsId,item.type)}>{item.name}</li>);
		});

		this.state.rightList[this.state.key].map((item,index)=>{
			rightList.push(<GoodsItem order={item} key={index}/>);
		});

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

function selector(state){
	if(state.allBrands.data.brands.length != 0){
		let leftData =[];
		state.allBrands.data.brands.map((item,index)=>{
			leftData.push({
				name: item.name+"酱料订单",
				type: 'sauce',
				brandsId: item.id
			});
			leftData.push({
				name: item.name+"酱料订单",
				type: 'article',
				brandsId: item.id
			});
		});
		return {leftData:leftData}
	}else{
		return {
			leftData:[]
		}
	}
}

export default connect(selector)(Add);