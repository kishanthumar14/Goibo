import React, { Component } from 'react'
import car1 from "./../../images/1.jpg"
import car2 from "./../../images/white.jpg"
import car3 from "./../../images/3.jpg"
import Honda from "./honda";
import Audi from "./audi";
import Toyota from "./toyota";
import Mercedes from "./mercedes";
import Others from "./others";
import Bmw from "./bmw"
import { AboutTemplateWrapper } from './aboutStyle';
import { Tabs } from 'antd';
// import 'antd/dist/antd.css';

const { TabPane } = Tabs;

export class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activatekey: "bmw"
        }
    }

    callback(key) {
        this.setState({ activatekey: key })
    }
    s
    render() {
        return (
            <AboutTemplateWrapper>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" style={{ height: "60vh" }}>
                        <div className="item active">
                            <img src={car1} alt="Los Angeles" width="100%" height="80%" style={{ width: "100%;" }} />
                        </div>

                        <div className="item ">
                            <img src={car2} alt="Los Angeles" width="100%" height="80%" style={{ width: "100%;" }} />
                        </div>

                        <div className="item ">
                            <img src={car3} alt="Los Angeles" width="100%" height="80%" style={{ width: "100%;" }} />
                        </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container" style={{ height: "100%", overflowY: "auto" }}>
                    <div className="title" style={{ color: "#323136" }}>About<span style={{ borderBottom: "solid 1px red" }}> Go ib</span>ibo Travel</div>
                    <div>
                        <img src={car3} alt="Los Angeles" width="100%" height="200px" style={{ width: "100%;" }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                             has been the industry's standard dummy text ever since the 1500s, when an unknown
                             printer took a galley of type and scrambled it to make a type specimen book.
                             It has survived not only five centuries, but also the leap into electronic typesetting
                             , remaining essentially unchanged. It was popularised in the 1960s with the release o
                             f Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ
                             ishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="title" style={{ color: "#323136" }}>vehi<span style={{ borderBottom: "solid 1px red" }}>cle t</span>o Ride</div>
                    <div>
                        <Tabs defaultActiveKey={this.state.activatekey} type="card" onChange={(e) => this.callback(e)} style={{ left: "20%" }}>
                            <TabPane tab="BMW" key="bmw">
                                <Bmw />
                                {/* <Audi /> */}
                            </TabPane>
                            <TabPane tab="Audi" key="audi">
                                <Audi />
                            </TabPane>
                            <TabPane tab="Honda" key="honda">
                                <Honda />
                            </TabPane>
                            <TabPane tab="Toyota" key="toyota">
                                <Toyota />
                            </TabPane>
                            <TabPane tab="Mercedes" key="mercedes">
                                <Mercedes />
                            </TabPane>
                            <TabPane tab="Others" key="others">
                                <Others />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "50%" }}>
                            <h6 style={{ margin: "20px", textAlign: "left", width: "80%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                 , remaining essentially unchanged. It was popularised in the 1960s with the release o
                                 f Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ
                             </h6>
                            <div class="progress" style={{ marginLeft: "20px", width: "80%" }}>
                                <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                    <span className="stitle"> BRANDING  90%</span>
                                </div>
                            </div>
                            <div class="progress" style={{ marginLeft: "20px", width: "80%" }}>
                                <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>

                                    <span className="stitle">   EDITIOURL  80%</span>

                                </div>
                            </div>
                            <div class="progress" style={{ marginLeft: "20px", width: "80%" }}>
                                <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>

                                    <span className="stitle">PHOTOGRAPHY  85%</span>

                                </div>
                            </div>
                            <div class="progress" style={{ marginLeft: "20px", width: "80%" }}>
                                <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}>

                                    <span className="stitle">WEB DESIGN  65%</span>

                                </div>
                            </div>
                        </div>
                        <div style={{ width: "50%", marginTop: "20px" }}>
                            <div class="panel panel-default" style={{ width: "80%" }}>
                                <div class="panel-heading"><span style={{ float: "left", marginLeft: "10px" }}>Who We Are</span> <span style={{ float: "right", marginRight: "5px" }}><i class="fa fa-plus" aria-hidden="true"></i></span></div>
                            </div>
                            <div class="panel panel-default" style={{ width: "80%" }}>
                                <div class="panel-heading"><span style={{ float: "left", marginLeft: "10px" }}>Why Choose Us</span> <span style={{ float: "right", marginRight: "5px" }}><i class="fa fa-plus" aria-hidden="true"></i></span></div>
                            </div>
                            <div class="panel panel-default" style={{ background: "black", width: "80%" }}>
                                <div class="panel-heading"><span style={{ float: "left", marginLeft: "10px" }}>About Our Business</span> <span style={{ float: "right", marginRight: "5px" }}><i class="fa fa-minus" aria-hidden="true"></i></span></div>
                            </div>
                            <h6 style={{ margin: "10px", textAlign: "left", width: "70%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                 , remaining essentially unchanged. It was popularised in the 1960s with the release o
                                 f Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ
                             </h6>
                            <div class="panel panel-default" style={{ width: "80%" }}>
                                <div class="panel-heading"><span style={{ float: "left", marginLeft: "10px" }}>DeadLiness</span> <span style={{ float: "right", marginRight: "5px" }}><i class="fa fa-plus" aria-hidden="true"></i></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div style={{ width: "10%" }}></div>
                    <div style={{ width: "20%" }} className="title2"><i class=" fa fa-user" aria-hidden="true"></i>
                        <div>5980</div></div>
                    <div style={{ width: "20%" }} className="title2"><i class="fa fa-trophy" aria-hidden="true"></i>
                        <div>1020</div></div>
                    <div style={{ width: "20%" }} className="title2"><i class="fa fa-comments" aria-hidden="true"></i>
                        <div>4230</div></div>
                    <div style={{ width: "10%" }} className="title2"><i class="fa fa-download" aria-hidden="true"></i>
                        <div>9750</div></div>


                </div>
            </AboutTemplateWrapper >
        )
    }
}

export default About
