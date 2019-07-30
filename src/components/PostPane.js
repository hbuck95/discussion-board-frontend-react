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
                    <Col><p><h4>Username:</h4></p></Col>
                    <Col><input type="text"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><p><h4>Password:</h4></p></Col>
                    <Col><input type="password"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><p><h4>Email:</h4></p></Col>
                    <Col><input type="text"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><p><h4>Content:</h4></p></Col>
                    <Col><input type="text" size="50" style={{height:200}}></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <br/>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><Button color="success">success</Button></Col>
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