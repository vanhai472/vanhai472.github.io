import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { store, history } from "./redux/store";
import Routes from "./routers/";
import vi_VN from "antd/es/locale/vi_VN";
import "antd/dist/antd.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { initGA, logPageView } from "../src/utils/analytics";
import * as theme from "@Config/theme";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${theme.background};
    font-family: ${theme.FontFamily}
  }
`;

class App extends Component {
    componentDidMount() {
        initGA();
        logPageView();
    }

    render() {
        return (
            <ConfigProvider locale={vi_VN}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Routes history={history} />
                    </ThemeProvider>
                </Provider>
            </ConfigProvider>
        );
    }
}

export default App;
