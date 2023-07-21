import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../actions/MainAction';
import Header from '../components/headerNav/Header'
import Main from '../components/Main';
import ShareBlog from '../components/shareblog/ShareBlog'

function ShareBlogPage() {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.Data.blogs);
  
  useEffect(()=>{
    dispatch(getBlogs('personal'))
  },[])

  const getAfterChange =() =>{
    dispatch(getBlogs('personal'))
  }
  console.log(blogs);
  return (
    <div>
        <Header/>
        <ShareBlog/>
        <Main getAfterChange={getAfterChange} blogs={blogs}/> 
    </div>
  )
}

export default ShareBlogPage