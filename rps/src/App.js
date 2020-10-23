import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dash from './components/dashboard';
import {Route, Link, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Rock, Paper, Scissors!</h1>
      </header>
      <>
      <Switch>
      <Route path ="/dash"> <Dash/> </Route>
        <button> <Link to ="/dash"> Play!</Link> </button>
        </Switch>
      </>
    </div>
  );
}

export default App;
