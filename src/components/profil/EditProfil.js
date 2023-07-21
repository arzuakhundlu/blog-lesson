import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../actions/MainAction';
import InputEdit from './InputEdit'

function EditProfil({setEditVisible}) {
  const editedUser = useSelector(state => state.Data.editedUser);
  const dispatch = useDispatch()
  function saveProfileBtn(e){
    e.preventDefault();
    if(editedUser?.name !='' && editedUser?.email != ''){
      dispatch(updateProfile(editedUser))
      setEditVisible(false)
    }
  }
  return (
    <div class="edit_profile_container">
        <form class="edit_profile_form">
            <InputEdit name='editedUser.name' value={editedUser?.name} id='name' type='text' label='Name' />
            <InputEdit name='editedUser.country' value={editedUser?.country} id='country' type='text' label='Country' />
            <InputEdit name='editedUser.city' value={editedUser?.city} id='city' type='text' label='City' />
            <InputEdit name='editedUser.date_of_birth' value={editedUser?.date_of_birth} id='birth_year' type='date' label='Birth Year' />
            <InputEdit name='editedUser.email' value={editedUser?.email} id='email' type='email' label='Email' />
            <InputEdit name='editedUser.password' value={editedUser?.password} id='password' type='password' label='Password' />

            <div class="input_container">
                 <button onClick={(e)=>saveProfileBtn(e)} id="savebtn">Save</button>
            </div>
        </form>
    </div>
  )
}

export default EditProfil