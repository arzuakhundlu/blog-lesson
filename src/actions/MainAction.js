import axios from "axios";
import { changeStateValue } from "../redux/MainReducer";
import { MAIN_URL } from "../MAIN_API";

export const registerUser=(data)=>async dispatch=>{
    return await axios.post(`${MAIN_URL}/register`,data)
    .then(resp=>{
        return 'success'
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}

export const loginUser=(data)=>async dispatch=>{
    return await axios.post(`${MAIN_URL}/login`,data)
    .then(resp=>{
        console.log(resp.data);
        dispatch(changeStateValue({
            name:'user',
            value:resp.data.user
        }))
        localStorage.setItem('blogMainToken',resp.data.token)
        return 'success'
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}

export const getLoginData=()=>async dispatch=>{
    return await axios.get(`${MAIN_URL}/login-user`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('blogMainToken')}`
        }
    }).then(resp=>{
        console.log(resp.data);
        dispatch(changeStateValue({
            name:'user',
            value:resp.data
        }))
        return 'succes'
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}

export const getUsers=()=>async dispatch=>{
    return await axios.get(`${MAIN_URL}/user`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('blogMainToken')}`
        }
    }).then(resp=>{
        dispatch(changeStateValue({
            name:'allUsers',
            value:resp.data
        }))
        return 'succes'
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}

export const updateProfile = (data) => async dispatch => {
    return await axios.put(`${MAIN_URL}/user/${data.id}`,data,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('blogMainToken')}`
        }
    }).then(resp=>{
        dispatch(getLoginData())
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}


export const getOtherUser =(id)=>async dispatch=>{
    return await axios.get(`${MAIN_URL}/user/${id}`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('blogMainToken')}`
        }
    }).then(resp=>{
        
        return resp.data
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}


export const getBlogs =(type,userId='')=>async dispatch=>{
    return await axios.get(`${MAIN_URL}/blog?query_type=${type}&user_id=${userId}`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('blogMainToken')}`
        }
    }).then(resp=>{
        dispatch(changeStateValue({
            name:'blogs',
            value:resp.data
        }))
        return resp.data
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}


export const shareBlogAction = (data) => async dispatch => {
    return await axios.post(`${MAIN_URL}/blog`,data,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('blogMainToken')}`
        }
    }).then(resp=>{
        dispatch(getBlogs('personal'))
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}
export const likeUnlikeBlog = (type, blogId) => async dispatch => {
    return await axios.post(`${MAIN_URL}/like`,{type:type, blog_id:blogId},{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('blogMainToken')}`
        }
    }).then(resp=>{
        // dispatch(getBlogs('personal'))
        return 'success'
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}
export const commentBlog = (data) => async dispatch => {
    return await axios.post(`${MAIN_URL}/comment`,data,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('blogMainToken')}`
        }
    }).then(resp=>{
        // dispatch(getBlogs('personal'))
        return 'success'
    }).catch(err=>{
        console.log(err.response);
        return 'error'
    })
}