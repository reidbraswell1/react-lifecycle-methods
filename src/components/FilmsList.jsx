import React from "react";
import { Component } from "react";

class FilmsList extends Component {
    constructor(props) {
        console.log(`---Begin FilmsList Constructor---`);
        super(props);

        this.state = { list:[] };

        this.getFilms = this.getFilms.bind(this);

        console.log(`---End FilmsList Constructor---`);
    }

    componentDidMount() {

    }

    getFilms() {
        console.log(`---Begin FilmsList getFilms()---`);
        console.log(`---End FilmsList getFilms()---`);
    }

    render() {
        console.log(`---Begin FilmsList render()---`);
        console.log(`---End FilmsList render()---`);
        return (<ul></ul>);
      }
}