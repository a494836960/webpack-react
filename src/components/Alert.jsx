import React,{Component} from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

export default class Alert extends Component{
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

