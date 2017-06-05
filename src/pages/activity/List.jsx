import React, {Component} from 'react';
import Banner from 'component/Banner.jsx'

export default class List extends Component{
	
	constructor(props){
		super(props);
		this.state={
			bannerList: []
		}
	}

	componentDidMount(){
		this.state.bannerList = [
			{
				url:null,
				banner:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=102656704,3745576430&fm=117&gp=0.jpg'
			},
			{
				url:null,
				banner:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=102656704,3745576430&fm=117&gp=0.jpg'
			},
			{
				url:null,
				banner:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=102656704,3745576430&fm=117&gp=0.jpg'
			}
		]	
	}

	render(){

		return (
			<Banner list = {this.state.bannerList}/>
		);
	}
}