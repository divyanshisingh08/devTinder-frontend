import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const feed=useSelector((store)=>store.feed);
  console.log(feed)
  const dispatch=useDispatch();

  const getFeed=async()=>{
   
    try{
      if (feed && feed.length > 0) return;
      const res=await axios.get(BASE_URL + "/feed",{
      withCredentials:true
    });
    // console.log(res)
    dispatch(addFeed(res.data.data))
  }
  catch(err){
    setError(err?.response?.data || "Something Went Wrong")
    console.log(err)
  }
    

  }



  useEffect(()=>{
  
    getFeed();
  },[])

  if (!feed || feed.length === 0) {
    return <div className="text-center mt-10">No users found in feed.</div>
  }

  return (
   
    <div className='flex justify-center my-10'>
  
   
      <UserCard user={feed[0]}/>
  
      
     
    </div>
  )
}

export default Feed
