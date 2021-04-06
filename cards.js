import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import './cards.css';
import logo from './images/basic.jpg';

export default class Cards extends Component {
    render() {
        return (
            <div id="contentcards" className="container" style={{marginTop:"5%",fontSize:"50px"}}>
                <h1>Our Services</h1>
                <div className="row">
                <Card id="cards" className="col-sm-12 col-lg-4">
                <Card.Img src={logo}></Card.Img>
                </Card>
                <Card id="cards" className="col-sm-12 col-lg-4" >
                    <Card.Img src={logo}></Card.Img>
                </Card>
                <Card id="cards" className="col-sm-12 col-lg-4">
                    <Card.Img src={logo}></Card.Img>
                </Card>
                </div>
                <div className="row" id="row">
                <Card id="cards" className="col-sm-12 col-lg-4" >
                    <Card.Img src={logo} ></Card.Img>
                </Card>
                <Card id="cards" className="col-sm-12 col-lg-4" >
                    <Card.Img src={logo} ></Card.Img>
                </Card>
                <Card id="cards" className="col-sm-12 col-lg-4">
                    <Card.Img src={logo}></Card.Img>
                </Card>
                </div>
            </div>
        )
    }
}
