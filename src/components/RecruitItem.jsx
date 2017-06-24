import React,{Component} from 'react';

export default class RecruitItem extends Component{

	constructor(props){
		super(props);
		this.state={
			isExpand:  false
		}
	}

	toggleBody(){
		this.setState({
			isExpand: !this.state.isExpand
		})
	}

	render(){
		return(
			<div className={`${this.state.isExpand ? 'recruitItem-expand' : '' } recruitItem`}>
				<div className='recruitItem-head'>
					<div className='recruitItem-left'>
						<div>
							<span className='recruitItem-name'>BI工程师&nbsp;</span>
							<span>&nbsp;北京市东城区</span>
						</div>
						<div className='mt1'>薪资：面议 | 招聘人数：2人 | 发布时间：2016-8-16</div>
					</div>
					<div className='recruitItem-right' onClick={this.toggleBody.bind(this)}>
						<span className='recruitItem-symbol'></span>
					</div>
				</div>
				<div className='recruitItem-body'>
					<div className='recruitItem-labels'>
						<span className='recruitItem-label'>五险一金</span>
						<span className='recruitItem-label'>周末双休</span>
						<span className='recruitItem-label'>年终奖金</span>
						<span className='recruitItem-label'>周末双休</span>
						<span className='recruitItem-label'>年终奖金</span>
					</div>
					<div className='recruitItem-required'>
						<p className='recruitItem-required-title'>任职要求</p>
						<div className='recruitItem-required-body'>
							<p>1.计算机科学、数学、统计学等相关专业优先；</p>
							<p>2.熟练使用SQL语言，有Hive等大数据仓库使用经验优先；</p>
						</div>
					</div>
					<div className='recruitItem-required'>
						<p className='recruitItem-required-title'>工作职责</p>
						<div className='recruitItem-required-body'>
							<p>1.计算机科学、数学、统计学等相关专业优先；</p>
							<p>2.熟练使用SQL语言，有Hive等大数据仓库使用经验优先；</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

}