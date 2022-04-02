import React from "react";
import { Card, Col, Row } from "antd";

const quizList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Quizes = () => {
	return (
		<Row gutter={[12, 24]}>
			{quizList.map((qiz, i) => (
				<Col key={i}>
					<Card
						style={{ fontSize: "1rem" }}
						title={`Quiz title - ${qiz}`}
						bordered={false}>
						{`Quiz Desc - ${qiz}`}
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default Quizes;
