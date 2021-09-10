import React, { useState } from 'react';
import { Container,Row,Col ,Button} from 'react-bootstrap';
import {   Form,Input,Select} from 'antd';

import user from "../assets/profilePic.png";
const { Option } = Select;


const UserProfile = () =>{

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
    return (


        
        <Container style={{marginTop:-400, marginLeft:400}}>
        <Row>
       <Col>
       <img src={user} alt="profils pic" />
       </Col>
        <Col style={{marginTop:-200, marginLeft:250}}>
            <h1>User Profile</h1>
            <Form className="form">     
    
            <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
         name="firstname"
         label="FirstName"
         style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}

         tooltip="What do you want others to call you?"
         rules={[
           {
             required: true,
             message: 'Please input your firstname!',
             whitespace: true,
           },
         ]}
        >
          <Input />
        
        </Form.Item>
        <Form.Item
          name="lastname"
          label="LastName"
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your lastName!',
              whitespace: true,
            },
          ]}
        >
          <Input />
          
        </Form.Item>
      </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item 
        name="email"
        label="E-mail"
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
      </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          name="Password"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        
        </Form.Item>
        <Form.Item
          name="repassword"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          name="confirm"
          label="Re-Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form.Item>
  
  <Button variant="primary">Update Profile</Button>
  </Form>
   </Col>

       </Row>
        </Container>
    );
}
 export default UserProfile;