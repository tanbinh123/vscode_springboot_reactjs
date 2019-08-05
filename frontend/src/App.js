import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  testFun = () => {
    fetch('/api/getdatetime')
    .then(response => response.text())
    .then(message => {
      this.setState({message : message});
    });
  }

  componentDidMount() {
    setInterval(this.testFun, 250);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        <h1 className="App-title">{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
