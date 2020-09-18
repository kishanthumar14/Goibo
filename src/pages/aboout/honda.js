import React from 'react'
import car1 from "./../../images/h1.jpg"
import car2 from "./../../images/h2.jpg"
import car3 from "./../../images/h3.jpg"
import car4 from "./../../images/h4.jpg"

import car5 from "./../../images/h5.jpg"
import car6 from "./../../images/h6.jpg"

import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const Honda = (props) => {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Card
                    style={{ width: 400, margin: 16 }}
                    cover={
                        <img
                            alt="Bmw 7 series"
                            src={car1}
                        />
                    }
                    actions={[
                        <span><EllipsisOutlined key="setting" style={{ marginRight: "5px" }} /> 4 - Seat</span>,
                        <span><EditOutlined key="edit" style={{ marginRight: "5px" }} /> 4 - Laguage</span>,
                        <span><SettingOutlined key="ellipsis" style={{ marginRight: "5px" }} />AC/Non AC</span>,
                    ]}
                >
                    <span>Honda -1</span>
                </Card>
                <Card
                    style={{ width: 400, margin: 16 }}
                    cover={
                        <img
                            alt="Bmw 7 series"
                            src={car2}
                        />
                    }
                    actions={[
                        <span><EllipsisOutlined key="setting" style={{ marginRight: "5px" }} /> 4 - Seat</span>,
                        <span><EditOutlined key="edit" style={{ marginRight: "5px" }} /> 4 - Laguage</span>,
                        <span><SettingOutlined key="ellipsis" style={{ marginRight: "5px" }} />AC/Non AC</span>,
                    ]}
                >
                    <span>Honda -2</span>
                </Card>
                <Card
                    style={{ width: 400, margin: 16 }}
                    cover={
                        <img
                            alt="Bmw 7 series"
                            src={car3}
                        />
                    }
                    actions={[
                        <span><EllipsisOutlined key="setting" style={{ marginRight: "5px" }} /> 4 - Seat</span>,
                        <span><EditOutlined key="edit" style={{ marginRight: "5px" }} /> 4 - Laguage</span>,
                        <span><SettingOutlined key="ellipsis" style={{ marginRight: "5px" }} />AC/Non AC</span>,
                    ]}
                >
                    <span>Honda -3</span>
                </Card>
            </div>
            <div style={{ display: "flex" }}>
                <Card
                    style={{ width: 400, margin: 16 }}
                    cover={
                        <img
                            alt="Bmw 7 series"
                            src={car4}
                        />
                    }
                    actions={[
                        <span><EllipsisOutlined key="setting" style={{ marginRight: "5px" }} /> 4 - Seat</span>,
                        <span><EditOutlined key="edit" style={{ marginRight: "5px" }} /> 4 - Laguage</span>,
                        <span><SettingOutlined key="ellipsis" style={{ marginRight: "5px" }} />AC/Non AC</span>,
                    ]}
                >
                    <span>Honda -4</span>
                </Card>
                <Card
                    style={{ width: 400, margin: 16 }}
                    cover={
                        <img
                            alt="Bmw 7 series"
                            src={car5}
                        />
                    }
                    actions={[
                        <span><EllipsisOutlined key="setting" style={{ marginRight: "5px" }} /> 4 - Seat</span>,
                        <span><EditOutlined key="edit" style={{ marginRight: "5px" }} /> 4 - Laguage</span>,
                        <span><SettingOutlined key="ellipsis" style={{ marginRight: "5px" }} />AC/Non AC</span>,
                    ]}
                >
                    <span>Honda -5</span>
                </Card>
                <Card
                    style={{ width: 400, margin: 16 }}
                    cover={
                        <img
                            alt="Bmw 7 series"
                            src={car6}
                        />
                    }
                    actions={[
                        <span><EllipsisOutlined key="setting" style={{ marginRight: "5px" }} /> 4 - Seat</span>,
                        <span><EditOutlined key="edit" style={{ marginRight: "5px" }} /> 4 - Laguage</span>,
                        <span><SettingOutlined key="ellipsis" style={{ marginRight: "5px" }} />AC/Non AC</span>,
                    ]}
                >
                    <span>Honda -6</span>
                </Card>
            </div>
        </div>
    )
}

export default Honda
