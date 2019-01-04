import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';
import store from './store/index';
import Routes from './routes';
import GlobalStyle from './styles/Global';
const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
