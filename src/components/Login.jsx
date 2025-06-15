import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin,setIsLogin]=useState(false)
  const [error,setError]=useState("");
  const dispatch=useDispatch();
  const navigate =useNavigate();


  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL+ "/login", {
        emailId,
        password,
      },
      {
        withCredentials:true
      }
    );
  // console.log(res.data)
    dispatch(addUser(res.data))
    return navigate("/feed");
    
    } catch (err) {
     setError(err?.response?.data || "Something Went Wrong")
     console.log(err)
    }
  };


  
    
  const handleSignup = async () => {
    try {
      const res = await axios.post(BASE_URL+ "/signup", {
        firstName,
        lastName,
        emailId,
        password,
      },
      {
        withCredentials:true
      }
    );

    console.log(res.data.data)
    dispatch(addUser(res.data.data))
    return navigate("/profile");
    
    } catch (err) {
     setError(err?.response?.data || "Something Went Wrong")
     console.log(err)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 ">
      <div className="w-full max-w-md bg-base-100 text-base-content shadow-lg rounded-xl border border-neutral p-3 ">
        <div className="card-body ">
          <h2 className="card-title justify-center font-bold text-2xl ">
           { isLogin ? "Login" : "Signup"}
          </h2>
          <div>
           {  !isLogin  &&  
           <>
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">First Name </legend>
              <input
                type="text"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-base-200 transition"
                placeholder="John"
                value={firstName} 
                onChange={(e) => setFirstName( e.target.value)}
              />
            </fieldset>
              <fieldset className="fieldset ">
              <legend className="fieldset-legend">Last Name </legend>
              <input
                type="text"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-base-200 transition"
               placeholder="Doe"
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset> 
            </>
}

            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Email ID </legend>
              <input
                type="email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-base-200 transition"
                placeholder="John@example.com"
                value={emailId} 
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-base-200 transition"
                placeholder="••••••••"

                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-500 text-center text-sm font-medium">{error}</p>
          <div className="card-actions justify-center my-2">
            <button className="btn btn-primary w-full font-semibold text-lg tracking-wide hover:scale-[1.02] transition-transform" onClick={isLogin ?  handleLogin : handleSignup}>
              { isLogin ? "Login" : "Signup"}
            </button>
          </div>          
     <p
            className="text-sm text-center text-blue-300 mt-2 cursor-pointer hover:text-blue-400 hover:underline font-medium transition"
            onClick={()=>setIsLogin(value=>!value)}
          >
            {isLogin
              ? " New user? Create an account"
              : " Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
