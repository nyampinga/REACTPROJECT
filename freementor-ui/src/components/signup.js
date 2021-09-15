import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css";
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,Container } from 'antd';
const { Option } = Select;
const residences = [
  {
    value: 'Rwanda',
    label: 'Rwanda',
    
  },
  {
    value: 'Tanzania',
    label: 'Tanzania',
   
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

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
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
   
    <Form 
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        
      }}
      scrollToFirstError
    >
  
        <Row>
          <Col md="4">

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
  
      <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item 
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        name="residence"
        label="Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={residences} />
       
        </Form.Item>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
         
        </Form.Item>
      </Form.Item>
      <Form.Item style={{ marginBottom: 0 }}>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      </Form.Item>
      <Form.Item style={{ marginBottom: 0 }}>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <p className="mt-2">
              Already have account? <Link to="/signin">SignIn</Link>
            </p>
      </Form.Item>
      </Form.Item>
      </Col>
        </Row>
    </Form>
   
  );
};

export default RegistrationForm ;