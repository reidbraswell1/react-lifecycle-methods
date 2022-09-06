import React from "react";
import { Component } from "react";

class FilmsList extends Component {
    constructor(props) {
        console.log(`---Begin FilmsList Constructor---`);
        super(props);

        this.state = { list:[] };

        this.getFilms = this.getFilms.bind(this);

        console.log(`---End FilmsList Constructor---`);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        console.log(`---Begin componentDidMount()---`);
        this.getFilms();
        console.log(`---End componentDidMount()---`);
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
        return(<ul>
            {this.state.list.map((value,index,array) => {
                return(<li key={index}>value.title</li>)})}
            </ul>);
        /*{ this.state.list.map((value,index,array) => {
            return (<li key={index}>{value.title}</li>)
        })})*/
        //console.log(`---End FilmsList render()---`);
    }
}
export default FilmsList