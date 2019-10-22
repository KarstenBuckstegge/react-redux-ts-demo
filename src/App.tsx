import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';



import { ListComponent } from './components/ListComponent/ListComponent';

const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <ListComponent />
    </Provider>
  );
}

export default App;
