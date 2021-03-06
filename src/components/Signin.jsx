import React, { useState, useContext } from "react";
import { Button, Col, Divider, Input, Row, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { auth, provider } from "../firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../context/messageContext";

const { Title, Text } = Typography;

const SignUp = () => {
	const navigate = useNavigate();
	const { openErrorMsg } = useContext(MessageContext);
	const [fields, setFields] = useState({ email: "", pass: "" });
	const [btnIsLoading, setBtnIsLoading] = useState(false);

	const handleChange = (key) => (e) => {
		setFields({ ...fields, [key]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setBtnIsLoading(true);
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				fields.email,
				fields.pass
			);
			console.log(user);
			setBtnIsLoading(false);

			if (user.user.emailVerified) navigate("/dashboard/home");
			else openErrorMsg("Please verify your email to proceed");
		} catch (err) {
			setBtnIsLoading(false);
			openErrorMsg(err.message.split(":").slice(-1)[0].slice(0, -1));
			console.log(err);
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, provider);
			// console.log(res);
			navigate("/dashboard/home");
		} catch (err) {
			openErrorMsg(err.message.split(":").slice(-1)[0].slice(0, -1));
			console.log(err);
		}
	};

	return (
		<>
			<Row justify="center" align="middle" className="signup">
				<Col span={24}>
					<Row justify="center">
						<Col>
							<Title>Sign In</Title>
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
										loading={btnIsLoading}
										size="large"
										type="primary">
										Signin
									</Button>
								</Col>
							</Row>
						</form>
						<div className="links">
							<Button onClick={() => navigate("/signup")} type="link">
								Don't have an account? Signup
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
