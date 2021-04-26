import React, { Component } from 'react';
import App from '../App'

export default class BookList extends Component{

    constructor(props){
        super(props);

    }

    mappedBooks = props.map((element, index) => {
        return (
            <div>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <img>{img}</img>
            </div>
        )
    })
    

    render(){
        return (
        <div>
            <h2> list </h2>
        </div>
        )
    }   
}