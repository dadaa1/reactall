import React,{Component} from 'react'

class About extends Component{
	// constructor(props){
	// 	super(props);
	// }
	handle(){
		console.log(this)
	}
	render(){
		return(<div>
			<h1>I'm a About组件~</h1>
			<button onClick={ this.handle }>惦记我</button>
			<button onClick={ this.handle.bind(this) }>点击我</button>
		</div>)
	}
}

export default About