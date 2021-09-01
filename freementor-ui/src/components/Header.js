import React,{useState} from "react";

import { Link } from "react-router-dom";
import "./index.css";

import {Menu,Modal,Input} from "antd";
import { LogoutOutlined,CaretRightOutlined,AudioOutlined,HomeOutlined,LoginOutlined,DashboardOutlined,ContactsOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css';
import SignIn from "./signin";

import logo from "../assets/logo.png";

const { SubMenu } = Menu;
const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#40a9ff',
      }}
    />
  );

const Header= ()=>{
  const onSearch = value => console.log(value);

const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    const [current, setCurrent]=useState("home");


  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const state = {
    collapsed: false,
  };

  const toggleCollapsed = () => {
    this.setState({
      collapsed: !state.collapsed,
    });
  };
  
    return(
      
<>
      <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{padding:"30px"}}>
<SignIn/>

</div>
    </Modal>

      
      <div  style={{ width: 256}}>
        <div style={{padding:"-0px"}}>
        <img src={logo} alt="logo" />
          </div>

        <Search
    placeholder="Search mentor"
    enterButton="Search"
    size="large"
    suffix={suffix}
    onSearch={onSearch}
   style={{color:"#40a9ff",width:"400px",marginLeft:"930px",padding:"0px"}}
  />
      
        <Menu style={{height: 1000,marginTop:"-0px"}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={state.collapsed}
        >
          <Menu.Item key="free" icon={<DashboardOutlined />} style={{backgroundColor:"#40a9ff"}}>
            FREE MENTOR
          </Menu.Item>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          
          <SubMenu key="about" icon={<CaretRightOutlined/>} title="About Us">
          <Menu.Item key="7"><Link to="/about">About Us</Link></Menu.Item>
            <Menu.Item key="5">Vission</Menu.Item>
            <Menu.Item key="6">Mission</Menu.Item>
            <Menu.Item key="8">Services</Menu.Item>
           
          </SubMenu>
         <Menu.Item key="contact" icon={<ContactsOutlined />}>
         <Link to="/contact">Contact Us</Link>
          </Menu.Item>
          <SubMenu key="register" icon={<CaretRightOutlined />} title="Register Here">
            <Menu.Item key="signin" onClick={showModal} icon={<LoginOutlined />} >Sign IN</Menu.Item>
            <Menu.Item key="signup"icon={<LogoutOutlined />} ><Link to="/signup">Sign Up</Link></Menu.Item>
            <Menu.Item key="reset" icon={<LogoutOutlined />} >Reset Password</Menu.Item>
           
          </SubMenu>
        </Menu>
      </div>
      </>
 );
}

export default Header;