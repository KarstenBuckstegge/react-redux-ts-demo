import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { List } from './containers/ListContainer';


const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <List />
    </Provider>
  );
}

export default App;
