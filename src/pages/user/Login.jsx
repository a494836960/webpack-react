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
		
		tools.fetch({}).then(()=>{
			if(true){
				let from =this.props.location.query.from;
				if(!from){
					from='home'
				}
				dispatch(actions.setUser({isLogin:true}));
				this.props.router.replace({
					pathname: from
				})
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
						<input type='text' className='input' name='username' placeholder='请输入用户名' value={this.state.username || ''} onChange={this.handleChange.bind(this)}/>
					</div>
					<div className='wrap-input'>
						<i className='iconfont'>&#xe607;</i>
						<input type='text' className='input' name='password' placeholder='请输入用户名' value={this.state.password || ''} onChange={this.handleChange.bind(this)} />
					</div>
					
					<div style={{margin:'.2rem .6rem'}}>
						<Link className='fr' to='/user/forgetPassword'>忘记密码？</Link>
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