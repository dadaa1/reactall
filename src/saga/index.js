import { delay } from 'redux-saga'
import { call,put, takeEvery,select } from 'redux-saga/effects'
import {getUser} from '../api/index'
export function *hello(){
	yield delay(3000)
	yield put({
		type:'ADD',
		item:'saga',
	})
	console.log('hello world ~')
	yield takeEvery('*',function* (action){
		const state=yield select()
		console.warn('action', action)
		console.warn('state after', state)
		const data = yield call(getUser,'/fff')
		console.log(data)
	})
}