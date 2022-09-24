import React from "react";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";

const Registration = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please enter your first name",
              },
              { whitespace: true },
              { min: 2 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your first name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter your last name",
              },
              { whitespace: true },
              { min: 2 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your last name" />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="female">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

          <Form.Item
            name="contact"
            label="Contact Number"
            rules={[
              {
                required: true,
                message: "Please enter your contact number",
                pattern: new RegExp(/^[0-9]+$/),
              },
              { whitespace: true },
              { min: 10 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your contact number" />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              {" "}
              Agree to our <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default Registration;
