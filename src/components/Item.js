import React, { Component } from 'react';
import axios from 'axios';
    
import 'bootstrap/dist/css/bootstrap.css'

export default class Item extends Component {
    constructor(){
        super();
        this.state = { 
            id: ""
        };
    }

    delete = () => {
        const item = {
            _id: this.props._id,
            email: "bob@gog.com"
        };
        
        axios.delete("http://localhost:5000/item/delete",{data:item}).then(res => {
            console.log(res);
            this.props.func()
        }).catch(err => console.log(err));
    };

    render() {
        return (
            <div id = {this.props._id}>
                <p><b>Username: </b>{this.props.username}</p>
                <p><b>Content: </b>{this.props.content}</p>
                <button onClick={this.delete}>X</button>
                <br/><br/>
            </div>
        )};
}