import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';

const noWay=()=>(<div><h1>404</h1></div>);

class App extends Component {
  constructor(props){
    super(props);
    this.update=this.update.bind(this);
    console.log(props)
  }
  update(){
    const { update }=this.props;
    //console.log(this,update)
    let value=this.refs.add.value;
    let newV=value.split(',')[0];
    let old=value.split(',')[1];
    console.log(newV,old)
    update(newV,old);
  }
  render(){
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{JSON.stringify(this.props.list)}</h1>
        <input type='text' defaultValue='大山' ref='add'/>
        <button onClick={()=>this.props.add(this.refs.add.value)}>add</button>
        <button onClick={()=>this.props.deleteItem(this.refs.add.value)}>delete</button>
        <button onClick={()=>this.update()}>update</button>
      <ul>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/adsadad'}>404</Link></li>
      </ul>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Redirect from='/action' to='./about' />
        <Route component={noWay}/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
