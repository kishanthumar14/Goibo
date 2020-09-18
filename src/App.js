import React, { Component } from 'react';
import './App.css';

import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import 'antd/dist/antd.css';

import Test from './pages/test/test';
import About from './pages/aboout/about';
import Contact from './pages/contact/contact';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activatedkeys: "1",
    }
  }

  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

          </Header>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="App-title">
              <div style={{ color: "#dddddd", marginLeft: "130px", marginTop: "-28px" }}>Conect with us :</div>
              <div style={{ marginTop: "-28px" }}><i class="icon fa fa-facebook" aria-hidden="true"></i></div>
              <div style={{ marginTop: "-28px" }}><i class="icon fa fa-instagram" aria-hidden="true" style={{ color: "red" }}></i></div>
              <div style={{ marginTop: "-28px" }}><i class="icon fa fa-twitter" aria-hidden="true"></i></div>
              <div style={{ marginTop: "-28px" }}><i class="icon fa fa-pinterest" aria-hidden="true"></i></div>
              <div style={{ width: "40%", marginTop: "-28px" }}></div>
              <div style={{ color: "#dddddd", marginRight: "130px", marginTop: "-28px", float: "left" }}>Call : +91-792685 5414/8859</div>
            </div>
            <div className="logo">
              <img src="https://goibibo.ibcdn.com/styleguide/images/goLogo.png" width="90px" height="50px" style={{ float: "left", marginLeft: "100px", marginTop: "10px" }} alt="" />

            </div>
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/">About Us</Link></Menu.Item>
              <Menu.Item key="2"> <Link to="/test">Testimonial</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/contact">Contact Us</Link></Menu.Item>
              <Menu.Item key="4"><button className="btn btn-danger navbar-btn" style={{ background: "#342276", border: "none" }}>Quick Payment</button></Menu.Item>
            </Menu>

          </Header>
          <Content style={{ marginTop: "90px" }}>
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/test" component={Test} />
                <Route path="/contact" component={Contact} />
                {/* <Redirect to="/" /> */}
              </Switch>
            </div>
          </Content>
          <Footer style={{ backgroundColor: "dark" }}>
            <span style={{ textAlign: 'left', float: "left" }}>Copyright ©goibibo india,All Rights Reserved</span>
            <span style={{ textAlign: 'right', float: "right" }}>PrivacyPolicy | cancellatioin & Refund Policy | How To Pay</span>
          </Footer>
        </Layout>
      </div >
    );
  }
}

export default App;
