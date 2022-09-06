import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import React from "react";
import FilmsList from "./components/FilmsList.jsx"

class App extends Component {
  constructor(props) {
    console.log(`---Begin App constructor---`);
    super(props)
    console.log(`---End App constructor---`);
  }
  render() {
    return(<div className="container">
            <div className="row">
              <div class="col-6 text-center my-center mt-3">
                <h1>React Life Cycle Methods</h1>
              </div>
            </div>
            <div className="row my-center">
              <div className="col-5 my-center">
                <h5 className="text-center">Film Title - Director</h5>
                <FilmsList></FilmsList>
              </div>
            </div>
          </div>)
  }
}
export default App;
