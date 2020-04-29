import React, { Component } from "react";
import Header from "@Layout/Header/Login";
import Footer from "@Layout/Footer";
import WindowResize from "react-window-size-listener";
import { connect } from "react-redux";
import MainLayout from "./styles";
import { toggleAll } from "@Actions/app";
class Layout extends Component {
	render() {
		const { children, toggleAll } = this.props;
		return (
			<MainLayout>
				<WindowResize
					onResize={(windowSize) =>
						toggleAll(windowSize.windowWidth, windowSize.windowHeight)
					}
				/>
				<Header />
				{children}
				<Footer />
			</MainLayout>
		);
	}
}

export default connect(null, { toggleAll })(Layout);
