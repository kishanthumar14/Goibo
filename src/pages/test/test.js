import React, { Component } from 'react'
import { TestTemplateWrapper } from './testStyle';
import { Card, Avatar } from 'antd';
import { Carousel } from 'antd';

const { Meta } = Card;
export class Test extends Component {
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
            <TestTemplateWrapper>
                <div className="container" style={{ height: "100%" }}>
                    {/* <div className="title" style={{ color: "#323136" }}>About<span style={{ borderBottom: "solid 1px red" }}> Go ib</span>ibo Travel</div> */}

                    <div className="title" style={{ color: "#323136" }}>Test<span style={{ borderBottom: "solid 1px red" }}>imon</span>ial</div>
                    <div>
                        <Carousel >
                            <div style={{ display: "flex" }}>
                                <Card
                                    style={{ width: 400, marginTop: 16 }}
                                >
                                    <div>
                                        <div className="quate">,,</div>
                                        <div>
                                            <h6 style={{ margin: "20px", textAlign: "centre" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                                            , remaining essentially unchanged.
                                    </h6>
                                        </div>
                                        <Meta
                                            avatar={
                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                            }
                                            title={<><div>John Dio</div>

                                                <div>Manager KotakBank</div></>}
                                        />
                                        {/* </Skeleton> */}
                                    </div>
                                </Card>
                                <Card
                                    style={{ width: 400, marginLeft: "20px", marginTop: 16 }}
                                >
                                    <div>
                                        <div className="quate">,,</div>
                                        <div>
                                            <h6 style={{ margin: "20px", textAlign: "centre" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                                            , remaining essentially unchanged.
                                    </h6>
                                        </div>
                                        <Meta
                                            avatar={
                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                            }
                                            title={<><div>Sarah p.</div>

                                                <div>Hod Soace SOlutions</div></>}
                                        />
                                        {/* </Skeleton> */}
                                    </div>
                                </Card>
                            </div>
                            <div>
                                <Card
                                    style={{ width: 500, marginTop: 16 }}
                                >
                                    <h6 style={{ margin: "20px", textAlign: "centre" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                                    , remaining essentially unchanged.
                             </h6>
                                    <Meta
                                        avatar={
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        }
                                        title={<><div>John Dio</div>

                                            <div>Manager KotakBank</div></>}
                                    />
                                    {/* </Skeleton> */}
                                </Card>
                            </div>
                        </Carousel>

                    </div>
                </div >
                <div className="title" style={{ color: "#323136" }}>We Are<span style={{ borderBottom: "solid 1px red" }}>Mem</span>bers of</div>
                <div className="section2">
                    <div style={{ width: "10%" }}></div>
                    <div style={{ width: "15%" }} className="title2">
                        <img width="150px" alt="" height="150px" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR1LSl_6D8-Ccj7dLXzmp2VBwiSU1AXFIcPQ&usqp=CAU"}></img>
                    </div>
                    <div style={{ width: "15%" }} className="title2"><img alt="" width="150px" height="150px" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR1LSl_6D8-Ccj7dLXzmp2VBwiSU1AXFIcPQ&usqp=CAU"}></img>
                    </div>
                    <div style={{ width: "15%" }} className="title2"><img alt="" width="150px" height="150px" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR1LSl_6D8-Ccj7dLXzmp2VBwiSU1AXFIcPQ&usqp=CAU"}></img>
                    </div>
                    <div style={{ width: "15%" }} className="title2"><img alt="" width="150px" height="150px" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR1LSl_6D8-Ccj7dLXzmp2VBwiSU1AXFIcPQ&usqp=CAU"}></img>
                    </div>
                    <div style={{ width: "15%" }} className="title2"><img alt="" width="150px" height="150px" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR1LSl_6D8-Ccj7dLXzmp2VBwiSU1AXFIcPQ&usqp=CAU"}></img>
                    </div>
                    <div style={{ width: "10%" }}></div>


                </div>
            </TestTemplateWrapper>
        )
    }
}

export default Test
