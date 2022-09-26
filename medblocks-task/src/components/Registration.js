import React, { useState } from "react";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import Axios from "axios";

const Registration = () => {
  const url = "http://localhost:8080/fhir/Patient";

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    birthDate: "",
    telecom: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      resourceType: "Patient",
      name: [{ given: [user.firstname], family: user.lastname }],
      gender: user.gender,
      birthDate: user.birthDate,
      telecom: [{ value: user.telecom }],
    }).then((res) => {
      console.log(res.user);
    });
  };

  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          onSubmitCapture={(e) => handleSubmit(e)}
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
            <Input
              value={user.firstname}
              onChange={handleInput}
              placeholder="Type your first name"
            />
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
            <Input
              value={user.lastname}
              onChange={handleInput}
              placeholder="Type your last name"
            />
          </Form.Item>

          <Form.Item
            value={user.gender}
            onChange={handleInput}
            name="gender"
            label="Gender"
          >
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="female">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="birthDate"
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
              value={user.birthDate}
              onChange={handleInput}
            />
          </Form.Item>

          <Form.Item
            name="telecom"
            label="Telecom Number"
            rules={[
              {
                required: true,
                message: "Please enter your telecom number",
                pattern: new RegExp(/^[0-9]+$/),
              },
              { whitespace: true },
              { min: 10 },
            ]}
            hasFeedback
          >
            <Input
              value={user.telecom}
              onChange={handleInput}
              placeholder="Type your telecom number"
            />
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
