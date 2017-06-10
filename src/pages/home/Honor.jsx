import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
import　Banner from 'component/Banner'

class Index extends Component{
	
	constructor(props){
		super(props);
		this.state={
			banner: []
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '资质荣誉'}))
	}


	componentDidMount(){
		let banner = [{
			banner: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=26&gp=0.jpg',
			url: null
		}];

		this.setState({
			banner: banner
		})
	}

	render(){

		return (
			<div>
				<Banner list={this.state.banner}/>
				<div className='panel-list'>
					<div className='panel'>
						<div className="date">2008-12-15</div>
						<div className="title">中国烹饪协会</div>
						<div className='content'>
							经我会讨论通过，批准你单位为中国烹饪协会正式会员。从即日起享有本协会成员的一切权利和承担应有的义务。 湘0051会员资格有效期二年
						</div>
					</div>
					<div className='panel'>
						<div className="date">2008-12-15</div>
						<div className="title">中国烹饪协会</div>
						<div className='content'>
							经我会讨论通过，批准你单位为中国烹饪协会正式会员。从即日起享有本协会成员的一切权利和承担应有的义务。 湘0051会员资格有效期二年
						</div>
					</div>
					<div className='panel'>
						<div className="date">2008-12-15</div>
						<div className="title">中国烹饪协会</div>
						<div className='content'>
							经我会讨论通过，批准你单位为中国烹饪协会正式会员。从即日起享有本协会成员的一切权利和承担应有的义务。 湘0051会员资格有效期二年
						</div>
					</div>
					<div className='panel'>
						<div className="date">2008-12-15</div>
						<div className="title">中国烹饪协会</div>
						<div className='content'>
							经我会讨论通过，批准你单位为中国烹饪协会正式会员。从即日起享有本协会成员的一切权利和承担应有的义务。 湘0051会员资格有效期二年
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Index);