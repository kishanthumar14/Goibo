import React from 'react'
import car1 from "./../../images/t1.jpg"
import car2 from "./../../images/t2.jpg"
import car3 from "./../../images/t3.jpg"
import car4 from "./../../images/t4.jpg"

import car5 from "./../../images/t5.jpg"
import car6 from "./../../images/t6.jpg"

import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const Toyota = (props) => {
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
                    <span>Toyota-1</span>
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
                    <span>Toyota-2</span>
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
                    <span>Toyota-3</span>
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
                    <span>Toyota-4</span>
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
                    <span>Toyota-5</span>
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
                    <span>Toyota-6</span>
                </Card>
            </div>
        </div>
    )
}

export default Toyota
