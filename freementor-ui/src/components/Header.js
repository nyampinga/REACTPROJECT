import React,{useState} from "react";

import {Menu,Modal,Input} from "antd";

import "./index.css";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";

import SigninForm from "./SigninForm";
import logo from "../assets/logo.png";
import { UnorderedListOutlined,AudioOutlined,DashboardOutlined,ContactsOutlined, HomeOutlined, LoginOutlined} from '@ant-design/icons';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#15395b',
      }}
    />
  );
const Header = ()=>{
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

    return(
      <>
      <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{padding:"30px"}}>
<SigninForm/>

</div>
    </Modal>
    <div>
      
        <div>
        <img src={logo} alt="logo" />
          </div>
          <div className="social-container">
          <a href="https://www.youtube.com/c/jamesqquick"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
      </div>
          <Search
    placeholder="Search mentor"
    enterButton="Search"
    size="large"
    suffix={suffix}
    onSearch={onSearch}
   style={{color:"#15395b",width:"400px",marginLeft:"930px",padding:"0px"}}
  />
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{marginLeft: 450,marginTop: -40}}>
        <Menu.Item key="home" icon={<HomeOutlined />} >
   
        <Link to="/">
         Home</Link>
        </Menu.Item>
        <Menu.Item key="mentors" icon={ <UnorderedListOutlined />} >
          <Link onClick={handleClick} to="/allmentors">
         All Mentors</Link>
        </Menu.Item>
        <Menu.Item key="login" onClick={showModal} icon={<LoginOutlined />} >
         Login
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>

        <Link onClick={handleClick} to="/dashboard"  >
         Dashboard</Link>
        </Menu.Item>
      </Menu>
       </div>
       </>
    )
}

export default Header;