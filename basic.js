import React, { Component } from 'react';
import logo from './images/basic.jpg';
import './basic.css';

export default class Basic extends Component {
    render() {
        return (
            <div style={{marginTop:"5%",padding:"25px"}} id="main">

                <h1 style={{fontSize:"50px"}}>App Development</h1>
                <div className="row" style={{marginTop:"4%",fontSize:"25px"}} id="contentimage">
                    <p style={{textAlign:"center"}} className="col-sm-12 col-md-6 ">
                    <strong>TRANSFORM YOUR IMAGINATION IN TO REALITY</strong><br />
Our experts team will develop your App seemlessly & deliver it within the timeline.  We create Mobile and Web experiences that inspire in cost-effective range for startups and small to medium enterprices (SMEs). Mobile apps and Web solution are the enabling centerpieces of digital convergence for every business, every industry. We are here to create future-ready solutions to deliver the right business outcomes faster than our competitors-just the way you want it. 

                    </p>
                    <div className="col-sm-12 col-md-6">
                        <img id="image" src={logo} alt="App Development" width="600px" />
                    </div>
                </div>
            </div>
        )
    }
}
