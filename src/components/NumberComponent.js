import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
class Home extends Component {
  // constructor(){
  // 	super();
  // }
  render() {
    return (
      <div>
        {/*<Route exact path={'/number'} component={Nav}></Route>*/}

        <Route path={"/number/:number"} component={Num} />
        <Route exact path={"/number"} component={Nav} />
      </div>
    );
  }
}
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/number/123">123</Link>
        </li>
        <li>
          <Link to="/number/456">456</Link>
        </li>
      </ul>
    </div>
  );
};
const Num = props => {
  return (
    <div>
      {props.match.params.number}
      {JSON.stringify(props.location)}
      {console.log(props.history)}
      <button
        onClick={() => {
          props.history.push("/home");
        }}
      >
        开溜
      </button>
    </div>
  );
};
export default Home;
