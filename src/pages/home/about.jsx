import React,{Component} from 'react';
import tools from 'verdor/tools';
import {connect} from 'react-redux';
import * as actions from 'action/Index';

class About extends Component{
	constructor(props){
		super(props);
		this.state={
			articleContent: ''
		}
	}

	componentWillMount(){
		this.props.dispatch(actions.setHead({title:" "}));
	}

	componentDidMount(){
		this.props.dispatch(actions.getIntro());		
	}

	render(){
		let index = this.props.params.id;
		let intro = this.props.intros[index];
		if(!intro){
			return null;
		}
		return (
			<div className='article'>
				<header className='article-head'>
					<h1 className='article-title'>{intro.title}</h1>
					<div className='article-intro'>
						<span className='article-intro-date'>
							时间：{tools.formatterDate(intro.createDate)}
						</span>
					</div>
				</header>
				<div className='article-body' dangerouslySetInnerHTML={{__html: intro.content}}>
					 
				</div>
			</div>
		);
	}
}
function selector(state){
	console.log(state)
	return {
		intros: state.intro.list
	}
}

export default connect(selector)(About);