import React,{Component} from 'react';

export default class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			articleContent: ''
		}
	}

	componentDidMount(){
		this.setState({
			articleContent: "<p>balabalabalabala.......</p><p>balalababalalaba....</p>"
		})
	}

	render(){
		console.log(this.state.articleContent)

		return (
			<div className='article'>
				<header className='article-head'>
					<h1 className='article-title'>好吃最终页</h1>
					<div className='article-intro'>
						<span className='article-intro-date'>
							时间：2017-06-02 15:33:39
						</span>
						<span className='article-intro-origin'>
							文章来源：57度湘
						</span>
					</div>
				</header>
				<div className='article-body' dangerouslySetInnerHTML={{__html: this.state.articleContent}}>
					 
				</div>
			</div>
		);
	}
}