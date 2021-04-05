import React, { Component } from 'react';
import logo from './images/basic.jpg';


export default class Basic extends Component {
    render() {
        return (
            <div style={{backgroundColor:"greenyellow",marginTop:"5%",padding:"25px"}}>

                <h1>App Development</h1>
                <div className="row" style={{marginTop:"4%"}} id="contentimage">
                    <p className="col-sm-6">
                    <strong>TRANSFORM YOUR IMAGINATION IN TO REALITY</strong><br />
Our experts team will develop your App seemlessly & deliver it within the timeline.<br />  We create Mobile and Web experiences that inspire in cost-effective range for startups and small to medium enterprices (SMEs).<br /> Mobile apps and Web solution are the enabling centerpieces of digital convergence for every business, every industry. We are here to create future-ready<br /> solutions to deliver the right business outcomes faster than our competitors-just the way you want it. 

                    </p>
                    <div className="col-sm-6">
                        <img src={logo} style={{border:"10px solid grey"}} alt="App Development" width="500px" />
                    </div>
                </div>
            </div>
        )
    }
}
