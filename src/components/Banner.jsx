import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router'

export default class Banner extends Component{
	constructor(props){
		super(props);
		this.state={
			index: 0
		}
	}

	slideToIndex(index){
		let swipe = this.refs.swipe;
		swipe.slide(index);
		this.setState({
			index: index
		})
	}

	callback(index, item){
		this.setState({
			index:index
		})
	}

	render(){
		let listHtml = [];
		let dots = []
		this.props.list.map((item,index)=>{

			listHtml.push(<div key={index} className='banner-item'>
				<Link to={item.url}>
					<img src={item.banner}/>
				</Link> 
			</div>);

			dots.push(<li key={index} className={this.state.index === index ? 'active':''} onClick={this.slideToIndex.bind(this,index)}></li>)
		});

		dots.reverse();

		let config = {
			callback: this.callback.bind(this)
		}
		
		if(listHtml.length===0){
			return null;
		}
		
		let html = null;
		if(listHtml.length !== 1){
			html = <div>
				<ReactSwipe ref = 'swipe' swipeOptions = {config}>
					{listHtml}
				</ReactSwipe>
				<ul className="dots">
					{dots}
				</ul>
			</div>
		}else {
			html = listHtml
		}

		return(
			<div className = 'banner'>
				{html}
			</div>

		)
	}
}

Banner.defaultProps = {
	list: []
}