import React from 'react'
import BlogCard from './BlogCard'

function Main({blogs=[],getAfterChange}) {
  return (
    <section>
        <div class="container">
            <div class="column align_center blog_container">
              {
                blogs.map((blog,i)=>{
                  return(
                    <BlogCard
                    key={i}
                    blog={blog}
                    getAfterChange={getAfterChange}
                    />
                  )
                })
              }
                
              
            </div>
        </div>
    </section>
  )
}

export default Main