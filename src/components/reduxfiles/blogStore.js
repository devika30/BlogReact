import {createStore} from "redux"
import blogReducer from "./blogReducer"

const blogStore=createStore(blogReducer)

export default blogStore