import React, { Component } from "react";
import { Row, Col } from "antd";
import PhotoUploadWrapper from "./styles";
class Photo extends Component {
	render() {
		const listImage = [
			"/icon/User/2.png",
			"/icon/User/3.png",
			"/icon/User/4.png",
			"/icon/User/1.png",
			"/icon/User/2.png",
			"/icon/User/3.png",
			"/icon/User/4.png",
			"/icon/User/1.png",
			"/icon/User/2.png",
			"/icon/User/3.png",
			"/icon/User/4.png",
			"/icon/User/1.png",
			"/icon/User/2.png",
			"/icon/User/3.png",
			"/icon/User/4.png",
		];
		return (
			<Row gutter={16.5}>
				<Col xs={12} sm={12} md={8} lg={6} style={{ marginBottom: 24 }}>
					<PhotoUploadWrapper>
						<img src="/icon/Common/upload.png" alt="upload" />
						<span>Tải ảnh lên</span>
					</PhotoUploadWrapper>
				</Col>
				{listImage.map((value, index) => (
					<Col
						xs={12}
						sm={12}
						md={8}
						lg={6}
						key={index}
						style={{ marginBottom: 24 }}
					>
						<img src={value} style={{ width: "100%" }} />
					</Col>
				))}
			</Row>
		);
	}
}

export default Photo;
