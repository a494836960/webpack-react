 import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index'
import Banner from 'component/Banner'
class Join extends Component{
	
	constructor(props){
		super(props);
		this.state={
			banner: []
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '',cls:'join-head',hasRight:false}));
		this.state.banner=[{
			banner: require('img/join/banner.png')
		}]
	}

	render(){
		return(
			<div style={{background:'#fff'}}>
				<Banner list={this.state.banner}/>
				<div className='wrap-emphasis'>
					<span className='emphasis'>我们在这里向您承若</span>
				</div>
				<div className='wrap-explain'>
					<div className='explain'>
						<img className='img' src={require('img/join/mainLogo.png')}/>
						<div className='explain-content'>
							<p><i></i>我们会对您的资料保密</p>
							<p><i></i>符合条件的我司将在7个工作日内回复</p>
							<p><i></i>您提交数据为加密传输请耐心等待</p>
						</div>
					</div>
				</div>
				<div className='join-info-txt'>
					<span className='content'></span>
					<span className='txt'><img src={require('img/join/join-txt.png')}/></span>	
				</div>

				<div className='form'>
					<div className='form-group'>
						<label className='form-label'>手机号：</label>
						<input className='form-input' type="tel" placeholder='手机号码'/>
					</div>

					<div className='form-group'>
						<label className='form-label'>姓名：</label>
						<input className='form-input' type="text" placeholder='姓名'/>
					</div>

					<div className='form-group'>
						<label className='form-label'>性别：</label>
						<div className='wrap-radio'>
							<label><input type="radio" />男</label>
							<label><input type="radio"/>女</label>
						</div>
					</div>

					<div className='form-group'>
						<label className='form-label'>邮箱：</label>
						<input className='form-input' type="email" placeholder='邮箱'/>
					</div>
					<div className='form-group'>
						<label className='form-label'>从哪里了解到：</label>
						<input className='form-input' type="text" placeholder='从哪里了解到'/>
					</div>
					<div className='form-group'>
						<label className='form-label'>是否有餐饮经验：</label>
						<div className='wrap-radio'>
							<label><input type="radio" name='budget'/>是</label>
							<label><input type="radio" name='budget'/>否</label>
						</div>
					</div>
					<div className='form-group'>
						<label className='form-label'>加盟预算：</label>
						<div className='wrap-radio'>
							<label><input type="radio" name='budget'/>150-200万</label>
							<label><input type="radio" name='budget'/>200-250万</label>
							<label><input type="radio" name='budget'/>250万以上</label>
						</div>
					</div>

					<div className='form-group'>
						<label className='form-label'>对当前品牌评价：</label>
						<textarea className='form-input'></textarea>
					</div>

					<div className='form-group'>
						<label className='form-label'>备注：</label>
						<textarea className='form-input'></textarea>
					</div>
					<div className='tc'>
						<span className='btn btn-primary' style={{marginRight:".3rem"}}>提交信息</span>
						<span className='btn btn-primary btn-ghost'>重置信息</span>
					</div>
				</div>
				<div className='join-footer'>
					<img src={require('img/index/menu-logo.png')}/>
					<div>
						<p className='name'>
							五十七度湘餐饮管理有限公司
						</p>
						<p className='phone'>
							招商电话  0731-84895757/82258857
						</p>
						<p className='address'>
							地址：长沙市天心区芙蓉中路三段142号发展大厦B座9楼
						</p>
					</div>
				</div>
			</div>
		)
	}
}
export default connect()(Join);