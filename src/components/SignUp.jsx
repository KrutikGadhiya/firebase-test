import React, { useState } from "react";
import { Button, Col, Divider, Input, Row, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { auth, provider } from "../firebase-config";
import { addDoc } from "firebase/firestore";
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { usersCollectionRef } from "../config/collections";

const { Title, Text } = Typography;

const SignUp = () => {
	const navigate = useNavigate();
	const [fields, setFields] = useState({
		email: "",
		pass: "",
		name: "",
		mobile: 0,
	});
	const [btnIsLoading, setBtnIsLoading] = useState(false);

	const handleChange = (key) => (e) => {
		setFields({ ...fields, [key]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setBtnIsLoading(true);
		const createdUser = await createUserWithEmailAndPassword(
			auth,
			fields.email,
			fields.pass
		);
		// console.log(createdUser);
		await sendEmailVerification(createdUser.user);

		await addDoc(usersCollectionRef, {
			email: fields.email,
			name: fields.name,
			mobile: fields.mobile,
		});

		console.log(createdUser);
		setBtnIsLoading(false);
		setFields({ email: "", pass: "" });
		navigate("/");
	};

	const signInWithGoogle = async () => {
		await signInWithPopup(auth, provider);
		// console.log(res);
		navigate("/dashboard/home");
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
										required
										className="input-field"
										size="large"
										type={"text"}
										placeholder="Full Name"
										value={fields.name}
										onChange={handleChange("name")}
									/>
								</Col>
							</Row>
							<Row className="input-control" justify="center">
								<Col lg={{ span: 8 }} sm={{ span: 16 }} xs={{ span: 20 }}>
									<Input
										required
										className="input-field"
										size="large"
										type={"tel"}
										placeholder="8974514268"
										value={fields.mobile}
										onChange={handleChange("mobile")}
									/>
								</Col>
							</Row>
							<Row className="input-control" justify="center">
								<Col lg={{ span: 8 }} sm={{ span: 16 }} xs={{ span: 20 }}>
									<Input
										required
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
										required
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
										loading={btnIsLoading}
										type="primary">
										Signup
									</Button>
								</Col>
							</Row>
						</form>
						<div className="links">
							<Button onClick={() => navigate("/")} type="link">
								Already have an account? Login
							</Button>
						</div>

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
							<Button
								onClick={signInWithGoogle}
								className="btn"
								icon={<GoogleOutlined />}
								size="large">
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
