import React,{useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetch_search_blogs } from '../../reduxfiles/blogActions'
function SearchBar() {
    const blog=useSelector((state)=>state.query)
    const dispatch=useDispatch()
    const ref=useRef()
    const handleInputChange=(e)=>{
        const inputValue=e.target.value
        dispatch(fetch_search_blogs(inputValue))
    }

  return (
    <div className='searchBarStyle'>
        <input placeholder='Search Blogs' className='searchBarInput' value={blog} onChange={handleInputChange}/>
    </div>
  )
}

export default SearchBar