import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app.jsx';
import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);
const Load = () => (
	  <Provider store={createStoreWithMiddleware(reducers)}>
	  	<App />
	  </Provider>
);

ReactDOM.render(
  <Load />,
  document.querySelector('.app'));
