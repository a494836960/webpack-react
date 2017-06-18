import React,{Component} from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

class Alert extends Component{
	constructor(props){
		super(props);

		this.state={
			visible: false,
			type: 'success',
			title: '',
			body: '',
			btnTxt:'确定'
		}
	}

	show(data){
		this.setState({
			visible: true,
			type:data.type || 'success',
			title:data.title,
			body:data.body,
			btnTxt: data.btnTxt || '确定'
		});
	}

	hide(){
		this.setState({
			visible: false
		});
	}

	render(){

		return(
			<Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
				<div className='alert'>
					<div className='alert-body'>
						{this.state.body}
					</div>
					<div className='alert-footer'>
						<span className='btn btn-primary'>{this.state.btnTxt}</span>
					</div>
				</div>
			</Rodal>
		);
	}
}

class Tips extends Component{

	constructor(props){
		super(props);

		this.state={
			visible: false,
			txt:''
		}
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps.txt)
		if(!(nextProps.lastTime == nextProps.lastTime  && !nextProps.txt.txt)){
			this.show(nextProps.txt.txt,500);
		}
	}

	show(txt,duration = 500){
		this.setState({
			visible: true,
			txt:txt
		});

		setTimeout(()=>{
			this.hidden();
		},duration);
	}

	hidden(){
		this.setState({
			hidden: true
		})

		setTimeout(()=>{
			this.hide()
		},500);
	}

	hide(){
		this.setState({
			visible: false,
			hidden: false
		});
	}
	
	render(){
		if(!this.state.visible){
			return null;
		}
		return(
			<div className={`${this.state.hidden ? 'tips-hidden' : ''} tips`}>
				{this.state.txt}
			</div>
		);
	}
}

export {Alert, Tips}