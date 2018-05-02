import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Connect from './Connect';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import count from './middleware';
const store=createStore(
	reducer,
	applyMiddleware(count()),
);

ReactDOM.render(
<Provider store={store}>
	<Connect />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
