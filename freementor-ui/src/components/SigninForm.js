import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SigninForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
          <Link to="/dashboard">
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
          
          </Link>
        Or <Link to="/signup/">Register Now!</Link>
      </Form.Item>
    </Form>
  );
};

export default SigninForm;