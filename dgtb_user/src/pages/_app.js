import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";
import "antd/dist/antd.css";
import * as theme from "@Config/theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Head from "next/head";
import { initGA, logPageView } from "../utils/analytics";
import "../config/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const GlobalStyle = createGlobalStyle`
  body{
    background: ${theme.background};
    font-family: ${theme.FontFamily}
  }
`;

export default withRedux(makeStore, { debug: true })(
	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			return {
				pageProps: {
					...(Component.getInitialProps
						? await Component.getInitialProps(ctx)
						: {}),
				},
			};
		}
		componentDidMount() {
			initGA();
			logPageView();
			Router.events.on("routeChangeComplete", logPageView);
		}

		render() {
			const { Component, pageProps, store } = this.props;

			return (
				<div>
					<Head>
						<title>
							Đánh giá Trực Tuyến Uy Tín với cho mọi người tại Thayboi.vn
						</title>
					</Head>

					<Provider store={store}>
						<ThemeProvider theme={theme}>
							<GlobalStyle />
							<Component {...pageProps} />
						</ThemeProvider>
					</Provider>
				</div>
			);
		}
	}
);
