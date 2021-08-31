import React from "react";
import "./index.css";

import {Card,Input} from "antd";



import image1 from "../assets/wewe2.jpg";
import image2 from "../assets/wewe.jpg";
import image3 from "../assets/wewe1.jpg";





const Programs = ()=>{
    
    return(
      <div className="profile-container">
      <Card style={{width:"100%"}}>
          <Card.Grid   style={{width:"100%",padding:"80px 30px 30px 30px",border:"solid 2px white",display:"flex"}}>
        <img src={image1} alt="image" width="100%"/>
            
              <div style={{marginLeft:"100px"}}>

              <h1 style={{fontSize:"40px",color:"#40a9ff", fontWeight:"bold",border:"white"}}> Our Program </h1>
              <p style={{fontSize:"20px",padding:"10px",border:"solid 2px white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
         
              
              </div>
             
          </Card.Grid>
      </Card>
      <Card style={{width:"100%"}}>
          <Card.Grid hoverable={false}  style={{width:"100%",display:"flex",padding:"50px",height:"430px"}}>
              <img src={image2} alt="image" width="100%"/>
              <div style={{marginLeft:"100px"}}>
              <h1 style={{fontSize:"40px",color:"#40a9ff", fontWeight:"bold",border:"white"}}> Scheduler your Session </h1>
              <p style={{fontSize:"20px",padding:"10px",border:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
              </div>
          </Card.Grid>
      </Card>
      
        </div>
  )
}

export default Programs;