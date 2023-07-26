import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogsLayout() {
  return (
    <div>
      <header>Blogs</header>
      <main><Outlet/></main>
    </div>
  )
}

export default BlogsLayout