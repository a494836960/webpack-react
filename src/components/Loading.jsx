import React,{Component} from 'react';

export default class Loading extends Component{
	render(){
		return (
			<div style={{position:'relative'}}>
				<div className='loading'>
					<img src={require('img/loading.png')}/>
				</div>
			</div>
		);
	}
}