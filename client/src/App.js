import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
    componentWillMount(){
        axios.get('/api/getBook?id=5cd93a16873286386888ade3')
        .then(response=>{
          console.log(response.data)
        })
    }

    render(){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit you know App.js
          </p>

        </div>
      );
    }
}

export default App;

