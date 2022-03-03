import React, { useState } from "react";
import { Button, Col, Divider, Input, Row, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const SignUp = () => {
	const [fields, setFields] = useState({ email: "", pass: "" });
	const handleChange = (key) => (e) => {
		setFields({ ...fields, [key]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(fields);
		setFields({ email: "", pass: "" });
	};
	return (
		<>
			<Row justify="center" align="middle" className="signup">
				<Col span={24}>
					<Row justify="center">
						<Col>
							<Title>Sign Up</Title>
						</Col>
					</Row>
					<div className="input-fields">
						<form onSubmit={handleSubmit}>
							<Row className="input-control" justify="center">
								<Col lg={{ span: 8 }} sm={{ span: 16 }} xs={{ span: 20 }}>
									<Input
										className="input-field"
										size="large"
										type={"email"}
										placeholder="E-mail"
										value={fields.email}
										onChange={handleChange("email")}
									/>
								</Col>
							</Row>
							<Row className="input-control" justify="center">
								<Col lg={{ span: 8 }} sm={{ span: 16 }} xs={{ span: 20 }}>
									<Input.Password
										className="input-field"
										size="large"
										type={"password"}
										placeholder="password"
										value={fields.pass}
										onChange={handleChange("pass")}
									/>
								</Col>
							</Row>
							<Row className="input-control" align="center" justify="center">
								<Col lg={{ span: 6 }} sm={{ span: 14 }} xs={{ span: 20 }}>
									<Button
										htmlType="submit"
										className="btn"
										size="large"
										type="primary">
										Signup
									</Button>
								</Col>
							</Row>
						</form>

						<Row align="center" justify="center">
							<Col span={12}>
								<Divider />
							</Col>
						</Row>
						<Row align="center" justify="center">
							<Text>OR</Text>
						</Row>
						<Row align="center" justify="center">
							<Col span={12}>
								<Divider />
							</Col>
						</Row>
						<Row align="center" justify="center">
							<Button className="btn" icon={<GoogleOutlined />} size="large">
								SignIn with Google
							</Button>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default SignUp;
