import React from 'react'

function ProfileImg() {
  return (
    <div>
        <label for="profileImg">
            <img class="profile_img" id="prImg" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
        </label>
        <input accept='image/*' type="file" id="profileImg" style={{display: 'none'}} />
    </div>
  )
}

export default ProfileImg