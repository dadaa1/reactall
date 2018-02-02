import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  MemoryRouter,
  Route,
  Redirect,
  Link,
  Prompt,
  Switch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';

const noWay=()=>(<div><h1>404</h1></div>);
const history=createHistory();
history.push('/about')
class App extends Component {
  constructor(props){
    super(props);
    this.update=this.update.bind(this);
    console.log(props)
  }
  componentDidMount(){
    console.log(this.context);
  }
  update(){//redux的操作
    const { update }=this.props;
    //console.log(this,update)
    let value=this.refs.add.value;
    let newV=value.split(',')[0];
    let old=value.split(',')[1];
    console.log(newV,old)
    update(newV,old);
  }
  pushLocation(){//路由的操作
    //history.goBack();
    console.log(history);
    history.push('/about');
  }
  render(){
    const { list }=this.props;
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{JSON.stringify(list)}</h1>
        <input type='text' defaultValue='大山' ref='add'/>
        <button onClick={()=>this.props.add(this.refs.add.value)}>add</button>
        <button onClick={()=>this.props.deleteItem(this.refs.add.value)}>delete</button>
        <button onClick={()=>this.update()}>update</button>
      <ul>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/adsadad'}>404</Link></li>
        <li><Link to={'/'}>返回</Link></li>
        <li><button onClick={this.pushLocation}> 跳转</button></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/home" component={Home} />
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
