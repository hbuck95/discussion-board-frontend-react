import React, { Component } from 'react';
import {
    Button,
    Container,
    Row,
    Col } from 'reactstrap';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
    
import 'bootstrap/dist/css/bootstrap.css'

export default class PostPane extends Component {
    render() {
      return (
        <div id = "create-post">
            <Container>
                <br/>
                <Row>
                    <Col/>
                    <Col/>
                    <Col/>
                    <Col xs="auto"><h2>Create a Post:</h2></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                {/* <Row>
                    <Col/>
                    <Col/>
                    <Col><p><h5>Username:</h5></p></Col>
                    <Col><input type="text"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row> */}
                <Row>
                    <Col/>
                    <Col/>
                    <Col><p><h5>Password:</h5></p></Col>
                    <Col><input type="password"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                {/* <Row>
                    <Col/>
                    <Col/>
                    <Col><p><h5>Email:</h5></p></Col>
                    <Col><input type="text"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row> */}
                <Row>
                    <Col/>
                    <Col/>
                    <Col><p><h5>Content:</h5></p></Col>
                    <Col><input type="text" size="50" style={{height:200}}></input></Col>
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
        </Container>
        </div>
      );
    }
  }