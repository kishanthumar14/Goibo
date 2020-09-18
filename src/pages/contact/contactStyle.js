import styled from "styled-components";
// import 'antd/dist/antd.css';
const ContactTemplateWrapper = styled.div`
height: 100%;
    overflow: auto;
    .ant-card-meta-title {
        overflow: hidden;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 800 !important;
        margin-top: 6px;
        /* font-weight: bold; */
        margin-right: 100px;
        font-size: 10px !important;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .ssd{
margin:20px;
    }
    .quate{
        font-size: 50px !important;
        float: right;
        position: relative;
        top: -80px;

    }
    .ant-carousel .slick-dots li.slick-active button {
        background: red !important;
        opacity: 1;
        margin-top: 40px !important;
    }
    .ant-carousel .slick-dots li button {
        background: purple !important;
        opacity: 1;
        margin-top: 40px !important;
    }
    .ant-carousel .slick-list .slick-slide > div > div {
        vertical-align: bottom;
        display: flex !important;
    }
    .section2{
        height:180px;
        background-color:white;
        display:flex;
    }
    .title2{
        color: #2196F3;
        text-align: center;
        margin-top: 10px;
        width:200px;
        height:"200px
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
export { ContactTemplateWrapper };
