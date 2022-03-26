import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Root } from './Pages/Root';
import { initStore } from './store/store';


const store = initStore();

const AppComponent: React.FC = () => (
  <Provider store={store}>
    <CookiesProvider>
      <HashRouter>
        <Root />
      </HashRouter>
    </CookiesProvider>
  </Provider>
);

export const App = AppComponent;

// window.store = store;
