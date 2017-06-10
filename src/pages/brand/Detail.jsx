import React,{Component} from 'react';

export default class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			articleContent: ''
		}
	}

	componentWillMount(){
		console.log('componentDidMount')
	}

	componentDidMount(){
		this.setState({
			articleContent: "<p>balabalabalabala.......</p><p>balalababalalaba....</p>"
		})
	}

	render(){

		return (
			<div className='article'>
				<div className='article-body' dangerouslySetInnerHTML={{__html: this.state.articleContent}}>
					 
				</div>
			</div>
		);
	}
}