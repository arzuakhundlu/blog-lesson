import React, { useState } from 'react'
import moment from 'moment/moment'
import { useDispatch, useSelector } from 'react-redux'
import { commentBlog, likeUnlikeBlog } from '../actions/MainAction';
import { Link } from 'react-router-dom';

function BlogCard({blog,getAfterChange}) {
    const dispatch = useDispatch();
    const login = useSelector(state => state.Data.login)
    const [comment,setComment] = useState('')

    function likeBlogBtn(type, id){
        dispatch(likeUnlikeBlog(type, id))
        .then(resp=>{
            getAfterChange()
        })
    }
    function shareCommentBtn(){
        if(comment !=''){
            const newComment = {
                comment:comment,
                blog_id:blog.id
            }
            dispatch(commentBlog(newComment))
            .then(resp=>{
                getAfterChange()
            })
        }
    }
    console.log(login);
    console.log(blog);
  return (
        <div class="blog_cards">
            <div class="row">
                <h4 class="blog_title">{blog?.user?.name}</h4>
                <p class="blog_date">{moment(blog?.created_at).format("DD/MM/YYYY")}</p>
            </div>
            <div class="icon_container">
                <i onClick={(e)=>likeBlogBtn(blog?.like_check == 0? 'like': 'unlike', blog?.id)} style={{color:blog?.like_check == 0? 'gray': 'red'}} class="fas fa-heart"></i>
                <span>{blog?.likes_count}</span>
            </div>
            <p class="blog_paragraph">{blog?.text}</p>
            <button class="read_more_btn">Read more</button>
            <div class="post_sub_container">
                <div class="comment_container">
                   {
                    blog?.comments.map((data,j)=>{
                        return(
                            <div class="post_header">
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="user name" class="post_user_img"/>
                            <div class="user_details">
                                <Link to={`${login?.user?.id != data?.user?.user_id ?`/userdata/${data?.user?.id}`:`/profile` }`}  >{blog?.user?.name} {moment(data?.created_at).format('hh:mm')}</Link>
                                <span>{data?.comment}</span>
                            </div>
                        </div>
                        )
                    })
                   }
                    
                </div>
                <div class="comment_inp">
                    <input value={comment} onChange={(e)=>setComment(e.target.value)} type="text"/>
                    <button onClick={()=>shareCommentBtn()}>
                        Send 
                    </button>
                </div>
            </div>
        </div>
  )
}

export default BlogCard