import React,{Component} from 'react'

export default class TimeLine extends Component{

	render(){
		let itemsHtml = [];
		this.props.items.map((item,index)=>{
			itemsHtml.push(<div className={`time-line-item ${item.active? 'active': ''}`} key={index}>
				<div className="time-line-item-tail"></div>
				<div className="time-line-item-head"></div>
				<div className="time-line-item-content">
					<div className="time-line-item-title">{item.title}</div>
					<div className="time-line-item-desc">{item.desc}</div>
				</div>
			</div>);
		});

		return (
			<div className={`time-line ${this.props.cls? this.props.cls: '' }`}>
				{itemsHtml}
			</div>
		)
	}
}

TimeLine.defaultProps={
	items: [{
		title: '2017年10月1日',
		desc: '一个好动洗',
		active: true
	},
	{
		title: '2017年10月1日',
		desc: '一个好动洗',
	},
	{
		title: '2017年10月1日',
		desc: '一个好动洗',
	}]
}
