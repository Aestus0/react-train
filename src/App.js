import React from 'react';
import logo from './logo.svg';
import './App.css';

class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state = {a: 'test2'};
    this.changeTest = this.changeTest.bind(this);
  }

  changeTest() {
    setTimeout(()=>this.setState({a: 'abc'}), 2000);
  }

  render() {
    return (<span>{ this.props.test + '2'}</span>);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test test={"tet2"}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
