import styled from "styled-components";
// import 'antd/dist/antd.css';
const AboutTemplateWrapper = styled.div`
height: 100%;
    overflow: auto;
    .panel-default>.panel-heading {
        color: #333;
        height: 40px;
        border-radius: 0.5px;
        background-color: #f5f5f5;
        border-color: #ddd;
    }
    .section2{
        height:180px;
        background-color:black;
        display:flex;
    }
    .title2{
        color: #2196F3;
        text-align: center;
        margin-top: 10px;
        font-size: 50px;
    }
    .stitle{
        margin-top: 7px;
    text-align: center;
    position: relative;
    float: left;
    margin-left: 40px;
    }
    .progress {
        height: 35px;
        text-align: center;
        margin-bottom: 20px;
        overflow: hidden;
        background-color: #f5f5f5;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
        box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
    }   
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap {
        position: relative;
        left: 30%;
        display: inline-block;
        display: -ms-flexbox;
        display: flex;
        -ms-flex: auto;
        flex: auto;
        -ms-flex-item-align: stretch;
        align-self: stretch;
        overflow: hidden;
        white-space: nowrap;
        -webkit-transform: translate(0);
        transform: translate(0);
    }
    .title{
        font-size: 18px;
    color: rgb(50, 49, 54);
    font-weight: bold;
    padding: 5p;
    margin-top: 10px;
    padding: 5px;
    }
    `;
export { AboutTemplateWrapper };
