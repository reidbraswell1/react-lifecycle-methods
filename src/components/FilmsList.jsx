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
        console.log(`---Begin componentDidMount()---`);
        this.getFilms();
        console.log(`---End componentDidMount()---`);
    }

    getFilms() {
        console.log(`---Begin FilmsList getFilms()---`);
        const URL = "https://ghibliapi.herokuapp.com/films";
        let response = fetch(URL)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                this.setState({list:data});
            })
            .catch((err) => console.log(`Error on fetch = ${err}`))
        console.log(`---End FilmsList getFilms()---`);
    }

    render() {
        console.log(`---Begin FilmsList render()---`);
        return(<ul className="list-group">
                    {this.state.list.map((value,index,array) => {
                        return(<li className="list-group-item" 
                                    key={value.id} 
                                    id={value.id}>{index+1}. {value.title} - {value.director}
                                </li>)})}
            </ul>);
    }
}
export default FilmsList