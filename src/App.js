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
import NumberComponent from './components/NumberComponent';
import History from './History';
const noWay = () => (
  <div>
    <h1>404</h1>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    console.log('我是props:', this.props);
    this.state = {
      isRedirect: false,
      loaction: '/home'
    };
    this.update = this.update.bind(this);
    this.pushLocation = this.pushLocation.bind(this);
  }
  componentDidMount() {}
  update() {
    //redux的操作
    const { update } = this.props;
    let value = this.refs.add.value;
    let newV = value.split(',')[0];
    let old = value.split(',')[1];
    console.log(newV, old);
    update(newV, old);
  }
  pushLocation() {
    //路由的操作
    let local = '/' + this.refs.local.value;
    this.setState({ isRedirect: true, location: local });
  }
  render() {
    const { list } = this.props;
    return (
      <Router>
        <div className="App">
          {(() => {
            if (this.state.isRedirect) {
              return <Redirect to={this.state.location} />;
            }
          })()}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <h1>{JSON.stringify(list)}</h1>
          <input type="text" defaultValue="大山" ref="add" />
          <button onClick={() => this.props.add(this.refs.add.value)}>
            add
          </button>
          <button onClick={() => this.props.deleteItem(this.refs.add.value)}>
            delete
          </button>
          <button onClick={() => this.update()}>update</button>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/number">number</Link>
            </li>
            <li>
              <Link to="/adsadad">404</Link>
            </li>
            <li>
              <Link to="/">返回</Link>
            </li>
            <li>
              <input type="text" ref="local" />
              <button onClick={this.pushLocation}> 跳转</button>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/number" component={NumberComponent} />
            <Route path="/about" component={About} />
            <Redirect from="/action" to="./about" />
            <Route component={noWay} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
