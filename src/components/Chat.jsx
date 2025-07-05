import React from 'react'
import { useParams } from "react-router-dom";
import { useState } from 'react';

const Chat = () => {
   const targetUserId=useParams()
   const [message,setMessage]=useState([{text:"Hello World"}]);


  return (
    
     <div className='w-1/2 mx-auto border border-gray-600 m-5 h-[75vh] flex flex-col '>   
     <h1 className='border-b border-gray-600 p-4'>Chat</h1>
     <div className='flex-1 overflow-scroll p-3'> {/**display Message */}

{message.map((m,index)=>{
  return (
    <div key={index} className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
      />
    </div>
  </div>
  <div className="chat-header">
    Elon Musk
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
  )
})}

     </div>
        <div className='p-4 border-t  border-gray-600 flex items-center gap-2 '>
            <input type="text" className='flex-1 text-white border border-gray-600 rounded p-2' />
            <button className=' btn btn-secondary'>Send</button>
        </div>
     </div>
    
  )
}

export default Chat



