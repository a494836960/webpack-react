import React,{Component} from 'react';
import {tools} from 'verdor/tools';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import {Link} from 'react-router';

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			verify:'',
			confirmPsw:''
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title:'忘记密码',hasRight:false}));
	}

	handleChange(e){
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		})
	}

	handleSubmit(){
		console.log(this)
	}

	handleGetVerify(){
		console.log('获取验证码')
	}

	render(){
		return (
			<div className='login'>
				<img className='login-logo' src={require('img/user/login-logo.png')}/>
				<div>
					<div className='wrap-input'>
						<i className='iconfont'>&#xe60a;</i>
						<input type='text' className='input' name='username' placeholder='请输入用户名' value={this.state.username || ''} onChange={this.handleChange.bind(this)}/>
					</div>
					<div className='wrap-input'>
						<i className='iconfont'>&#xe606;</i>
						<input type='text' className='input' name='verify' placeholder='请输入验证码' value={this.state.verify || ''} onChange={this.handleChange.bind(this)} />
						<span className="verify" onClick={this.handleGetVerify.bind(this)}>获取验证码</span>
					</div>

					<div className='wrap-input'>
						<i className='iconfont'>&#xe607;</i>
						<input type='password' className='input' name='password' placeholder='请输入密码' value={this.state.password || ''} onChange={this.handleChange.bind(this)}/>
					</div>

					<div className='wrap-input'>
						<i className='iconfont'>&#xe607;</i>
						<input type='password' className='input' name='confirmPsw' placeholder='请再次输入密码' value={this.state.confirmPsw || ''} onChange={this.handleChange.bind(this)}/>
					</div>

					<div className='' style={{margin:'.2rem'}}>
						<div className='btn btn-block btn-primary mt3' onClick={this.handleSubmit.bind(this)}>提交</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Login);