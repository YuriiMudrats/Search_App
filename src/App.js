import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

import MainPage from './containers/MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

export default App;
