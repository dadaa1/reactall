import React, { Component } from 'react';

class Input extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const add=this.props.add;
        return (
            <div>
                请输入文字:<input type="text" defaultValue="" name="one" ref='add'/>
                <input type='button' onClick={ ()=>{console.log('input内的输出：',this.refs.add.value),add(this.refs.add.value),this.refs.add.value='';} } value="提交"/>
            </div>
        )
    }
}
export default Input;




