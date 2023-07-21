import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { shareBlogAction } from '../../actions/MainAction';

function ShareBlog() {

    const [text , setText] = useState();
    const dispatch = useDispatch();

    function shareBlogbtn(){
        if(text != ''){
            const newBlog={
                text:text,
                image:'image'
            }
            dispatch(shareBlogAction(newBlog))
            .then(resp=>{
                setText('')
            })
        }
    }

  return (
    <section>
        <div class="container">
            <div class="write_blog_container">
                <img alt="blog img" class="blog_img uploaded_img_as_blog" src="" />
                <textarea onChange={(e)=>setText(e.target.value)} value={text} placeholder="Write..." id="textarea"></textarea>
                <div class="row">
                <button onClick={(e)=>shareBlogbtn()} id="shareBlogBtn" class="save_blog_btn">save</button>
                <input type="file" style={{display: 'none'}} id="upload_blog_img" />
                <div class="blog_icon_container">
                    <i class="fas fa-times remove_img_btn"></i>
                    <label for="upload_blog_img">
                        <i class="fas fa-upload upload_img_btn"></i>
                    </label>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ShareBlog