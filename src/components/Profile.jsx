import React, { useEffect } from 'react'
import EditProfile from './EditProfile'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Profile = () => {
const user=useSelector((store)=>store.user);

  
  return (
    user &&
    <div>
     <EditProfile user={user}/>
    </div>
  )
}

export default Profile
