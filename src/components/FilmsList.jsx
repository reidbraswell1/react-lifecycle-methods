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
        const URL = "https://ghibliapi.herokuapp.com/films";
        let response = fetch(URL)
            .then(response => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(`Error on fetch = ${err}`))
        console.log(`---End FilmsList getFilms()---`);
    }

    render() {
        console.log(`---Begin FilmsList render()---`);
        console.log(`---End FilmsList render()---`);
        return (<ul></ul>);
      }
}