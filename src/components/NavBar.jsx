import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const NavBar = () => {
  const user= useSelector((store)=>store.user);
  // console.log(user)
const dispatch=useDispatch();
const navigate=useNavigate();

  const handleLogout=async()=>{
  try  
  {
   const res= await axios.post(BASE_URL + "/logout",{},{withCredentials:true})
    dispatch(removeUser())
    return navigate("/login")
  }
  catch(error){
    console.log(error)
  }
  }

  return (
   
        <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl"> 🧑‍💻DevTinder</Link>
  </div>
  <div className="flex gap-2">
 
 {user && 
  <div className='flex items-center' >Welcome, {user.firstName}
 <div className="dropdown dropdown-end mx-5 flex">

      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User"
            // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            // src={user.photoURL}
            src='https://media.licdn.com/dms/image/v2/D5635AQFQxs3yKcj2iQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1732344766399?e=1743760800&v=beta&t=KPmDPS-HRXseEWcmXDro67gsmkeBhzdEXMqlDSuozxk'
             />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link  onClick={(handleLogout)}>Logout</Link></li>
      </ul>
    </div>
    </div>}
  </div>
</div>
    
  )
}

export default NavBar
