import './App.css';
import { Component } from "react";
import React from "react";
import FilmsList from "./components/FilmsList.jsx"

class App extends Component {
  constructor(props) {
    console.log(`---Begin App constructor---`);
    super(props)
    
    this.state = { errorTest: false }

    console.log(`---End App constructor---`);
  }
  render() {
    console.log(`---Begin App render()---`);
    return(<div className="container">
            <div className="row">
              <div class="col-6 text-center my-center mt-3">
                <h1>React Life Cycle Methods</h1>
              </div>
            </div>
            <div className="row mt-3 my-center">
              <div className="col-5 my-center">
                <h5 className="text-center">Film Title - Director</h5>
                <FilmsList errTest={this.state.errorTest}></FilmsList>
              </div>
            </div>
            <div className="row mt-3">
              <footer className="col-5 my-center footer">
                <p>Life Cycle Methods Exercise 9/22</p>
              </footer>
            </div>

          </div>)
  }
}
export default App;
