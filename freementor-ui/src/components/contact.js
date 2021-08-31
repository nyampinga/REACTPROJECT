import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import foto from "../assets/foto.jpg";
import qrContact from "../assets/ben Address contact qr.png";
import {
  RightOutlined,
  GooglePlusOutlined,
  PhoneOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { Image, Card } from "antd";
const Contact = () => {
  return (
    <Card className="about-container">
      <h1 className="nav-title-style" style={{textAlign:"center"}}>Contact Us</h1>
      <div className="nav-line-style"></div>

      
      <div className="about-grid-style" style={{marginLeft:"500px"}}>
        <Image.PreviewGroup className="meAbout-style">
          <Image width={300} src={foto} className="meAbout-style" />
        </Image.PreviewGroup>
        <div style={{ marginRight:"500px" }}>
         
          <div className="about-grid-style">
            <ul>
              <il>
                <strong>
                  {" "}
                  <RightOutlined className="arrow-icon" /> Names:
                </strong>{" "}
                <span> NYAMPINGA Joselyne </span>
              </il>{" "}
              <br />
             
              <il>
                <strong>
                  {" "}
                  <GooglePlusOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span> joselynenya@gmail.com</span>
              </il>{" "}
              <br />
              <il>
                <strong>
                  {" "}
                  <PhoneOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span> +250 788 642 652</span>
              </il>{" "}
              <br />
              <il>
                <strong>
                  {" "}
                  <AimOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span> Rwanda / Kigali City</span>
              </il>{" "}
              <br />
              <il>
                <strong>
                  {" "}
                  <RightOutlined className="arrow-icon" /> Freelancer:{" "}
                </strong>{" "}
                <span> Am Available </span>
              </il>{" "}
              <br />
            </ul>

            <img src={qrContact} alt="me" style={{marginLeft:"50px"}} />
          </div>
        </div>
      </div>

       
    
    </Card>
  );
};

export default Contact;