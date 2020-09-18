import React, { Component } from 'react'
import { ContactTemplateWrapper } from './contactStyle';
import { Input } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';

export class Conatct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activatekey: "bmw"
        }
    }

    s
    render() {
        return (
            <ContactTemplateWrapper>
                <div className="container" style={{ height: "100%" }}>
                    {/* <div className="title" style={{ color: "#323136" }}>About<span style={{ borderBottom: "solid 1px red" }}> Go ib</span>ibo Travel</div> */}
                    <div className="title" style={{ color: "#323136" }}>Con<span style={{ borderBottom: "solid 1px red" }}>tac</span>t Us</div>
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "50%" }}>
                            <div className="title" style={{ textAlign: "left", color: "#323136", fontSize: "15px" }}><span style={{ borderBottom: "solid 1px red" }}>Addr</span>ess</div>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <i class="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "10px", marginTop: "10px" }}></i>
                                </div>
                                <div>
                                    <h6 style={{ marginTop: "10px", textAlign: "left", width: "50%" }}>B/706 ,GaneshPalaza,Nr,Navarangpura Bus Stand,
                                 NavarangPura,Ahemdabad,
                                 Gujarat-38000909,india
                             </h6>
                                </div>
                            </div>
                            <div className="title" style={{ textAlign: "left", color: "#323136", fontSize: "15px" }}><span style={{ borderBottom: "solid 1px red" }}>Phon</span>e/Email</div>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <i class="fa fa-phone" aria-hidden="true" style={{ marginRight: "10px", marginTop: "10px" }}></i>
                                </div>
                                <div>
                                    <h6 style={{ marginTop: "10px", textAlign: "left", width: "100%" }}>+91-9990878787
                             </h6>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <i class="fa fa-mobile" aria-hidden="true" style={{ marginRight: "10px", marginTop: "10px" }}></i>
                                </div>
                                <div>
                                    <h6 style={{ marginTop: "10px", textAlign: "left", width: "100%" }}>+91-9990878787/+91-9904656789
                             </h6>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <i class="fa fa-envelope" aria-hidden="true" style={{ marginRight: "10px", marginTop: "10px" }}></i>
                                </div>
                                <div>
                                    <h6 style={{ marginTop: "10px", textAlign: "left", width: "100%" }}>contact@goibibo.com
                             </h6>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "50%", marginTop: "20px" }}>
                            <div className="ssd" style={{ margin: "20px" }}>
                                <Input placeholder="Your Name*" />
                            </div>
                            <div className="ssd" style={{ margin: "20px" }}>
                                <Input placeholder="Email id*" type="text" />
                            </div>
                            <div className="ssd" style={{ margin: "20px" }}>
                                <Input placeholder="Your Phone*" type="text" />
                            </div>
                            <div className="ssd" style={{ margin: "20px" }}>
                                <Input placeholder="Your Message" type="TextArea" />
                            </div>
                            <div className="ssd" style={{ margin: "20px" }}>
                                <Button type="primary" style={{ width: "100%", border: "none", backgroundColor: "purple" }}>Submit</Button>
                            </div>

                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </ContactTemplateWrapper >
        )
    }
}

export default Conatct
