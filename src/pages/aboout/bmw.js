import React from 'react'
import car1 from "./../../images/1.jpg"
import car2 from "./../../images/white.jpg"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const Bmw = (props) => {
    return (
        <div>
            <div style={{ display: "flex" }}>
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
                    <span>Bmw 7 series</span>
                </Card>
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
                    <span>Bmw 7 series</span>
                </Card>
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
                    <span>Bmw 7 series</span>
                </Card>
            </div>
            <div style={{ display: "flex" }}>
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
                    <span>Bmw 7 series</span>
                </Card>
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
                    <span>Bmw 7 series</span>
                </Card>
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
                    <span>Bmw 7 series</span>
                </Card>
            </div>
        </div>
    )
}

export default Bmw
