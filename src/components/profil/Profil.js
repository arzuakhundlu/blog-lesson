import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOtherUser } from '../../actions/MainAction'
import { changeStateValue } from '../../redux/MainReducer'
import AboutUser from './AboutUser'
import EditProfil from './EditProfil'
import ProfileImg from './ProfileImg'

function Profil({btnVisiblePosition=true}) {
    const user = useSelector(state => state.Data.user)
    const [editVisible, setEditVisible] = useState(false);
    const [profUser, setProfUser] = useState('')
    const dispatch = useDispatch();


    const params = useParams();

     function editBtnVisible(position){
        setEditVisible(!position)
        dispatch(changeStateValue({
            name:'editedUser',
            value:user
        }))
     }


     useEffect(()=>{
        if(params.id){
            dispatch(getOtherUser(params.id))
            .then(resp=>{
                setProfUser(resp)
                console.log(resp);
            })
        }else{
            setProfUser(user)
        }
     },[])
  return (
    <section>
        <div class="container">
            <div class="profile_page_header">
                <div class="row">
                    <ProfileImg/>
                    <ul class="profile_details column">
                        <AboutUser id="prName" title='Name:' value={profUser?.name}/>
                        <AboutUser id="prCountry" title='Country:' value={profUser?.country}/>
                        <AboutUser id="prCity" title='City:' value={profUser?.city}/>
                        <AboutUser id="prDate" title='Birth Year:' value={profUser?.date_of_birth}/>
                        <AboutUser id="prEmail" title='Email:' value={profUser?.email}/>
                        {
                            btnVisiblePosition?

                            <li id="prEditBtn">
                                <i onClick={()=>editBtnVisible(editVisible)}  class="fas fa-edit"></i>
                            </li>:null
                            }
                    </ul>
                </div>
            </div>

           {
            editVisible? <EditProfil setEditVisible={setEditVisible}/> :null
           }
        </div>
    </section>
  )
}

export default Profil