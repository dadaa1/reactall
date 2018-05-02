import React,{Component} from 'react';
import Input from './Input';
class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			input:'default	',
		}
		this.handle=this.handle.bind(this);
	}
	handle(name){
		console.log('Home组件的输出：',name);
		this.setState({'input':name});
	}
	render(){
		return(<div>
			<h1>I'm a Home组件~</h1>
			<button onClick={()=>{this.props.history.push('/number')}}>发哦没那~</button>
			<h2>{ this.state.input }</h2>
			<Input add={this.handle}></Input>
		</div>);
	}
	
}

export default Home;