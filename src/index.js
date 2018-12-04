import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const aaa=null;
import Connect from './Connect'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import count from './middleware'
import { hello } from './saga/index.js'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware, count()))
sagaMiddleware.run(hello)

ReactDOM.render(
	<Provider store={store}>
		<Connect />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
