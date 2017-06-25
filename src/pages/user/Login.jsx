import React,{Component} from 'react';
import tools from 'verdor/tools';
import {connect} from 'react-redux';
import * as actions from 'action/Index';
import {Link} from 'react-router';

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title:'登录',hasRight:false}));

		this.state.errorCode = {
			C1000: '操作失败',
			C1001: '操作成功',
			C1002: '参数错误',
			C1003: '账号或密码错误',
			C1004: '账号已锁定',
			C1005: '账号已停用',
		}
	}

	handleChange(e){
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		})
	}

	handleSubmit(){
		let {dispatch} = this.props;
		if(!this.state.username){
			dispatch(actions.showTips({txt:'请输入用户名！'}));
			return;
		}

		if(!this.state.password){
			dispatch(actions.showTips({txt:'请输入密码'}));
			return;
		}
		
		tools.fetch({
			url:'/protal/mobile/login',
			data:{
				mobile: this.state.username,
				password: this.state.password
			}
		}).then((json)=>{
			if(json.code == 'C1001'){
				let from =this.props.location.query.from;
				if(!from){
					from='home'
				}
				dispatch(actions.setUser({isLogin:true}));
				this.props.router.replace({
					pathname: from
				})
			} else {
				dispatch(actions.showTips({txt:this.state.errorCode[json.code]}));
			}
		});
	}

	render(){
		return (
			<div className='login'>
				<img className='login-logo' src={require('img/user/login-logo.png')}/>
				<div>
					<div className='wrap-input'>
						<i className='iconfont'>&#xe653;</i>
						<input type='tel' className='input' name='username' placeholder='请输入用户名' value={this.state.username || ''} onChange={this.handleChange.bind(this)}/>
					</div>
					<div className='wrap-input'>
						<i className='iconfont'>&#xe607;</i>
						<input type='password' className='input' name='password' placeholder='请输入用户名' value={this.state.password || ''} onChange={this.handleChange.bind(this)} />
					</div>
					
					<div className='' style={{margin:'.2rem'}}>
						<div className='btn btn-block btn-primary mt3' onClick={this.handleSubmit.bind(this)}>登录</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Login);