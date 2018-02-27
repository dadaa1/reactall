import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Connect from './Connect';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store=createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Provider store={store}>
	<Connect />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
