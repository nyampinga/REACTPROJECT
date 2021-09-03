import React,{useState} from "react";


import { Link } from "react-router-dom";
import "./index.css";
import background from "../assets/9.jpg";
import {Menu,Modal,Card} from "antd";
import { HomeOutlined, LoginOutlined, MailOutlined,TwitterOutlined,WhatsAppOutlined,FacebookOutlined,InstagramOutlined,GooglePlusOutlined,LinkedinOutlined,LikeOutlined,DislikeOutlined} from '@ant-design/icons';
import logo from "../assets/logo.png";
import 'antd/dist/antd.css';
import SignIn from "./signin";

const { SubMenu } = Menu;
const Homes = ()=>{
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
    const [current, setCurrent]=useState("page");


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
<div style={{backgroundImage: "url(" + background + ")",height: 700,backgroundSize: 'cover',overflow: 'hidden',backgroundRepeat: 'no-repeat'}}>
       
<h1 style={{color:"white", fontSize:"30px",fontWeight:"bolder"}}> FREE MENTOR</h1>
<div className="icons-list" mode="horizontal" style={{height:"50px",marginLeft:"280px",width:"365px",marginTop:"-50px",color:'white',justifyContent:'space-between' }} >
<TwitterOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<WhatsAppOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<FacebookOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<InstagramOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<GooglePlusOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<LinkedinOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<LikeOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<DislikeOutlined />
  </div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{height:"50px",marginLeft:"980px",width:"365px",marginTop:"-70px",backgroundColor: '#002766',color:'white'}}>
        <Menu.Item key="home" icon={<HomeOutlined /> }>
        Home
        </Menu.Item>
        <Menu.Item key="aboutus" icon={<MailOutlined /> }>
       About Us
        </Menu.Item>
        <Menu.Item key="login" onClick={showModal} icon={<LoginOutlined />} >
        LogIn
        </Menu.Item>
      </Menu>
      <Card hoverable={true} style={{ width: 250,marginTop: 200,height: 50,marginLeft: 300,backgroundColor: '#002766',color: 'white'}}>
    <p style={{marginTop: -10,fontSize:"20px",fontWeight:"bolder"}}> Mentorship Session</p>
  
  </Card>
  <Card hoverable={true} style={{ width: 250,marginTop: -50,height: 50,marginLeft: 700,backgroundColor: '#002766',color: 'white'}}>
    <p style={{marginTop: -10,fontSize:"20px",fontWeight:"bolder"}}>View Mentor</p>
  
  </Card>

       </div>
    
       </>
    )
}

export default Homes;