import React from 'react'
import car1 from "./../../images/o1.jpg"
import car2 from "./../../images/o2.jpg"
import car3 from "./../../images/03.jpg"
import car4 from "./../../images/o4.jpg"

import car5 from "./../../images/05.jpg"
import car6 from "./../../images/o6.jpg"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const Others = (props) => {
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
                    <span>1 series</span>
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
                    <span>2 series</span>
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
                    <span>3 series</span>
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
                    <span>4 series</span>
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
                    <span>5 series</span>
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
                    <span>6 series</span>
                </Card>
            </div>
        </div>
    )
}

export default Others
