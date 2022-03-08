import React from "react";
import { Layout, Typography } from "antd";
import {
	QuestionOutlined,
	HomeOutlined,
	FileAddOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";

const { Sider, Header, Content } = Layout;
const { Text } = Typography;

const navlinks = [
	{
		title: "Home",
		icon: <HomeOutlined />,
		path: "home",
	},
	{
		title: "Qurstions",
		icon: <QuestionOutlined />,
		path: "questions",
	},
	{
		title: "Quiz",
		icon: <FileAddOutlined />,
		path: "quiz",
	},
];

const navActive = {
	background: "rgba(23, 125, 220, 10%)",
	borderRight: "3px solid #177ddc",
};

const Dashboard = () => {
	return (
		<>
			<Layout className="dashboard">
				<Header className="header">
					<Text className="head">Welcome Krutik</Text>
				</Header>
				<Layout>
					<Sider theme="light">
						<div className="sidenav">
							{navlinks.map((link, i) => (
								<NavLink
									className="navlink"
									key={i}
									to={link.path}
									style={({ isActive }) => (isActive ? navActive : undefined)}>
									<span className="icon">{link.icon}</span>
									{link.title}
								</NavLink>
							))}
						</div>
					</Sider>
					<Content className="content">
						<Outlet />
					</Content>
				</Layout>
				{/* <Footer>Footer</Footer> */}
			</Layout>
		</>
	);
};

export default Dashboard;
