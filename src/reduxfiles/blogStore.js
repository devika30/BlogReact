import {createStore,applyMiddleware} from "redux"
import blogReducer from "./blogReducer"
import thunk from "redux-thunk"

const blogStore=createStore(blogReducer,applyMiddleware(thunk))


export default blogStore