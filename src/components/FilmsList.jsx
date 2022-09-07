import React from "react";
import { Component } from "react";

class FilmsList extends Component {
    constructor(props) {
        console.log(`---Begin FilmsList Constructor---`);
        super(props);

        this.state = { list:[], errorText:"" };

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
        const BAD_URL = "https://ghibliapi.herokuapp.com/filmss"
        const GOOD_URL = "https://ghibliapi.herokuapp.com/films"
        const URL = GOOD_URL;
        fetch(URL)
            .then((response) => {
                if(response.ok) { 
                    return response.json()
                }
                else {
                    throw new Error("Unknown Network Error Has Occurred");
                }
            })
            .then((data) => {
                console.log(data);
                this.setState({list:data, errorText:""});
            })
            .catch((err) => { 
                console.log(`Error on fetch = ${err}`);
                this.setState( { list: [], errorText: `An error has occurred fetching data from ${URL}: ${err}`});
            });
        console.log(`---End FilmsList getFilms()---`);
    }

    render() {
        console.log(`---Begin FilmsList render()---`);
        return(<div>
                <ul className="list-group">
                    {this.state.list.map((value,index,array) => {
                        return(
                                <li className="list-group-item" 
                                    key={value.id} 
                                    id={value.id}>{index+1}. {value.title} - {value.director}
                                </li>)})}
                </ul>
                <p className="error"><span className="color-red">{this.state.errorText}</span></p>
                </div>);
    }
}
export default FilmsList