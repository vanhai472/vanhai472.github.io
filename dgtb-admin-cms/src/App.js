import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
// import { IntlProvider } from "react-intl";
// import AppLocale from "./languageProvider";
import { store, history, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import Routes from "./router/";
import vi_VN from "antd/es/locale/vi_VN";
class App extends Component {
  render() {
    return (
      <ConfigProvider locale={vi_VN}>
        {/* <IntlProvider> */}
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <Routes history={history} />
          </PersistGate>
        </Provider>
        {/* </IntlProvider> */}
      </ConfigProvider>
    );
  }
}

export default App;
