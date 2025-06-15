import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import { addConnection } from "../utils/connectionSlice";

const Request = () => {
const request=useSelector((store)=>store.request)
  const dispatch = useDispatch();
  const [error,setError]=useState("");

  const reviewRequest= async(status,_id)=>{
    try{
        const res= await axios.post(BASE_URL+ "/request/review/"+ status + "/"+ _id,{},{withCredentials:true});
        dispatch(removeRequest(_id))
        
    }
    catch(err){
        console.log(err)
    }

  }

  const getRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/recieved", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addRequest(res.data.data));
    } catch (error) {
        setError(error)
      
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  if (!request || request.length === 0) {
    return <h1 className="text-white text-xl text-center mt-10">No Requests Found</h1>;
  }

  return (
   
    request && (
        <div className="flex flex-col items-center ">
          <p className=" text-xl text-white font-bold opacity-90  p-4">
            My Requests
          </p>
  
          {request.map((r) => {
           
            const {_id,firstName,lastName,age,gender,about,photoURL}=r.fromUserId;
            return (

            <ul key={_id} className="list  bg-base-200 rounded-box shadow-md w-1/2 my-2">
              <li className="list-row">
                <div>
                  <img className="size-10 rounded-box" src={photoURL} />
                </div>
                <div>
                <div>{firstName + " " + lastName}</div>
                <span>{age + " , "+ gender }</span>
                  <p className="list-col-wrap text-xs">{about}</p>
                </div>
               <div>
               <button className="btn btn-secondary mx-2" onClick={()=>{reviewRequest("accepted",r._id)}}>Accept</button>
               <button className="btn btn-primary" onClick={()=>{reviewRequest("rejected",r._id)}}>Reject</button>
           
               </div>
              </li>
            </ul>
            )
})}
        </div>
    )
      )
  
};

export default Request;
