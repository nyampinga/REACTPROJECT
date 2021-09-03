import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import foto1 from "../assets/foto1.jpg";

import {  Image, Card } from "antd";
const About = () => {
  return (
    <Card className="about-container"style={{marginTop:"-1000px",height:"1000px",width:"1040px",marginLeft:"300px"}} >
      <h1 className="nav-title-style" style={{textAlign:"center"}}>About FreeMentor</h1>
      <div className="nav-line-style"></div>

      <h4 style={{textAlign:"center",height:"100px",width:"300px",marginLeft:"300px"}}>
        {" "}
        I am software Developer, have been working with web development since
        2016, the period during which I have worked in different environments,
        from big consultancy companies to start-ups. I am a self- motivated and
        self-taught professional who likes to solve problems. I merge a passion
        for usability and user experience with technical knowledge to create
        cool digital experiences.
      </h4>

      <div className="about-grid-style" style={{marginLeft:"300px",marginTop:"150px"}}>
        <Image.PreviewGroup className="meAbout-style">
          <Image width={300} src={foto1} className="meAbout-style" />
        </Image.PreviewGroup>
        <div style={{ marginRight:"500px" }}>
        
          
        </div>
      </div>

       
    
    </Card>
  );
};

export default About;