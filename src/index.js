import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Connect from './Connect';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store=createStore(reducer);

ReactDOM.render(
<Provider store={store}>
	<Connect />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
