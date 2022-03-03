import React, { useState } from "react";
import { auth, provider } from "../firebase-config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

import { Button, Card, Divider, Input, Space, Typography } from "antd";

const { Title } = Typography;

const Signin = () => {
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
		<div>
			<Card>
				<Space size="middle" direction="vertical">
					<div>
						<Title>Signin</Title>
						<Space size="middle">
							<Button type="primary" onClick={signInWithGoogle}>
								Signin with Google
							</Button>
							<Button type="primary" onClick={handleSignOut}>
								Signout
							</Button>
						</Space>
					</div>
					<div>
						<form onSubmit={emailPassSignIn}>
							<Space size="middle" direction="vertical">
								<div>
									<Input
										value={emailPass.email}
										onChange={handleChange("email")}
										type="email"
										placeholder="email"
										name="email"
									/>
									<Input
										value={emailPass.pass}
										onChange={handleChange("pass")}
										type="password"
										name="email"
									/>
								</div>
								<Space size="middle">
									<Button type="primary">Submit</Button>
									<button type="submit">Submit</button>
								</Space>
							</Space>
						</form>
					</div>
				</Space>
			</Card>

			<Divider />
			{/* <div>{JSON.stringify(details)}</div> */}
		</div>
	);
};

export default Signin;
