 import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import Banner from 'component/Banner';
import {Alert} from 'component/Alert';
import tools from 'verdor/tools';
class Join extends Component{
	
	constructor(props){
		super(props);
		this.state={
			banner: [],
			data:{

			}
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title: '',cls:'join-head',hasRight:false}));
		this.state.banner=[{
			banner: require('img/join/banner.png')
		}]
	}

	handleSubmit(){
		let data = this.state.data;
		if(!data.mobile){
			dispatch(actions.showTips({txt:'请输入手机号码'}));
			return;
		}

		if(!data.email){
			dispatch(actions.showTips({txt:'请输入您的邮箱'}));
			return;
		}

		if(!data.name){
			dispatch(actions.showTips({txt:'请输入您的姓名'}));
			return;
		}

		if(!data.infoSource){
			dispatch(actions.showTips({txt:'请告诉我们您重哪里了解到的'}));
			return;
		}

		if(!data.budget){
			dispatch(actions.showTips({txt:'请选择您的预算'}));
			return;
		}

		tools.fetch({
			url:'/protal/mobile/joinApply',
			data: data
		}).then(json=>{
			this.refs.alert.show({
				title:'提交成功',
				body:'提交完成等待客服确认中。。。'
			});
		});
	}

	handleReset(){
		this.setState({
			data:{}
		})
	}

	dataChange(e){
		let value = e.target.value;
		let name = e.target.name;
		this.state.data[name]=value;
		this.setState({});
	}

	render(){
		return(
			<div style={{background:'#fff'}}>
				<Alert ref='alert'/>
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
						<input className='form-input' type="tel" name='mobile' value={this.state.data.mobile || ""} onChange={this.dataChange.bind(this)} placeholder='手机号码'/>
					</div>

					<div className='form-group'>
						<label className='form-label'>姓名：</label>
						<input className='form-input' type="text" name='name' value={this.state.data.name || ""} onChange={this.dataChange.bind(this)} placeholder='姓名'/>
					</div>

					<div className='form-group'>
						<label className='form-label'>性别：</label>
						<div className='wrap-radio'>
							<label><input type="radio" name='gender' value='male' onChange={this.dataChange.bind(this)}/>男</label>
							<label><input type="radio" name='gender' value='female' onChange={this.dataChange.bind(this)}/>女</label>
						</div>
					</div>

					<div className='form-group'>
						<label className='form-label'>邮箱：</label>
						<input className='form-input' type="email" name='email' value={this.state.data.email || ""} onChange={this.dataChange.bind(this)} placeholder='邮箱'/>
					</div>
					<div className='form-group'>
						<label className='form-label'>从哪里了解到：</label>
						<input className='form-input' type="text" name='infoSource' value={this.state.data.infoSource || ""} onChange={this.dataChange.bind(this)} placeholder='从哪里了解到'/>
					</div>
					<div className='form-group'>
						<label className='form-label'>是否有餐饮经验：</label>
						<div className='wrap-radio'>
							<label><input type="radio" name='hasExperience'  value='true' onChange={this.dataChange.bind(this)}/>是</label>
							<label><input type="radio" name='hasExperience'  value='false' onChange={this.dataChange.bind(this)}/>否</label>
						</div>
					</div>
					<div className='form-group'>
						<label className='form-label'>加盟预算：</label>
						<div className='wrap-radio'>
							<label><input type="radio" name='budget' value='150-200万' onChange={this.dataChange.bind(this)}/>150-200万</label>
							<label><input type="radio" name='budget' value='200-250万' onChange={this.dataChange.bind(this)}/>200-250万</label>
							<label><input type="radio" name='budget' value='250以上万' onChange={this.dataChange.bind(this)}/>250万以上</label>
						</div>
					</div>

					<div className='form-group'>
						<label className='form-label'>对当前品牌评价：</label>
						<textarea className='form-input' name='review' value={this.state.data.review || ""}  onChange={this.dataChange.bind(this)}></textarea>
					</div>

					<div className='form-group'>
						<label className='form-label'>备注：</label>
						<textarea className='form-input' name='memo' value={this.state.data.memo || ""} onChange={this.dataChange.bind(this)}></textarea>
					</div>
					<div className='tc'>
						<span className='btn btn-primary btn-ghost' style={{marginRight:".3rem"}} onClick={this.handleSubmit.bind(this)}>提交信息</span>
						<span className='btn btn-primary btn-ghost' onClick={this.handleReset.bind(this)}>重置信息</span>
					</div>
				</div>
				<div className='index-info-footer'>
					<span className='content'></span>
					<span className='txt'><img src={require('img/join/join-footer.png')}/></span>	
				</div>
				<div className='join-footer'>
					<img src={require('img/join/join-bottom.png')}/>
				</div>
				<div className='join-bottom-line'></div>
			</div>
		)
	}
}
export default connect()(Join);