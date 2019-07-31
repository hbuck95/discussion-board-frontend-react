import React, { Component } from 'react';
import axios from 'axios';

import {
    Button,
    Container,
    Row,
    Col } from 'reactstrap';
    
import 'bootstrap/dist/css/bootstrap.css'

export default class PostPane extends Component {
    constructor(){
        super();
        this.state = { 
            username: "",
            email: "",
            content: ""
        };
	}

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({username: e.target[0].value});
        this.setState({email: e.target[1].value});
        this.setState({content: e.target[2].value});
        //SendPost({username: this.state.username, email: this.state.email, content: this.state.content});

        const body = {
            username: e.target[0].value,
            email: e.target[1].value,
            content: e.target[2].value
        };

        const headers = {
            'Content-Type': 'application/json'
        };

        console.log("Body: "+JSON.stringify(body));
        axios.post("http://localhost:5000/item/add", body, {
            headers: headers
          })
            .then(response => {
                console.log(response.data);
                this.props.func();
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
      return (
        <div id = "create-post">
            <Container>
                <br/>
                <form id="postForm" onSubmit={this.handleSubmit}>
                <Row>
                    <Col/>
                    <Col/>
                    <Col/>
                    <Col xs="auto"><h2>Create a Post:</h2></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><h5>Username:</h5></Col>
                    <Col><input type="text"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><h5>Email:</h5></Col>
                    <Col><input type="text"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><h5>Content:</h5></Col>
                    <Col><textarea style={{height:200, width:500}}></textarea></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <br/>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><Button color="success">Post</Button></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                </form>
        </Container>
        </div>
      );
    }
  }