import React, { useState } from "react";
import { auth, provider } from "../firebase-config";
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

import { Button, Divider, Input, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Signin = () => {
	const navigate = useNavigate();
	const [details, setDetails] = useState({});
	const [emailPass, setEmailPass] = useState({ email: "", pass: "" });

	const emailPassSignIn = async (e) => {
		e.preventDefault();
		const user = await signInWithEmailAndPassword(
			auth,
			emailPass.email,
			emailPass.pass
		);
		console.log(user);
		setDetails(user);
	};

	const handleChange = (prop) => (event) => {
		setEmailPass({ ...emailPass, [prop]: event.target.value });
	};

	const signInWithGoogle = async () => {
		const res = await signInWithPopup(auth, provider);
		setDetails(res);
		console.log(res);
	};
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				alert("signed out");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<Space
				className="signin"
				size="middle"
				align="center"
				direction="vertical">
				<div>
					<Title>Signin</Title>
					<Space size="middle">
						<Button size="large" type="primary" onClick={signInWithGoogle}>
							Signin with Google
						</Button>
						<Button size="large" type="primary" onClick={handleSignOut}>
							Signout
						</Button>
					</Space>
				</div>
				<div>
					<form onSubmit={emailPassSignIn}>
						<Space size="middle" direction="vertical">
							<div>
								<Input
									size="large"
									value={emailPass.email}
									onChange={handleChange("email")}
									type="email"
									placeholder="email"
									name="email"
								/>
								<Input
									size="large"
									value={emailPass.pass}
									onChange={handleChange("pass")}
									type="password"
									name="email"
								/>
							</div>
							<Space size="middle">
								<Button size="large" htmlType="submit" type="primary">
									Submit
								</Button>
							</Space>
						</Space>
					</form>
				</div>
				<Divider />
				<Space size="middle">
					<Button size="large" onClick={() => navigate("signup")}>
						Sign UP
					</Button>
					<Button size="large" onClick={() => navigate("posts")}>
						Posts
					</Button>
				</Space>
				<Divider />
				<div>{details?.user?.email}</div>
			</Space>
		</>
	);
};

export default Signin;
