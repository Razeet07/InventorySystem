import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
 
import users from '../reducerSlice/users'
import logger from 'redux-logger'
const reducer = combineReducers({
    users,
    //..
})
 
 const store = configureStore({
    reducer,
    middleware:[logger]
 })
 
 export default store;