import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom";


const Connections = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const connection = useSelector((store) => store.connection);

 


  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnection(res.data.data));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if(!connection) return;

  if(connection.length===0) return <h1>No Connection Found</h1>

  return (
    connection && (
      <div className="flex flex-col items-center ">
        <p className=" text-xl text-white font-bold opacity-90  p-4">
          My Connections
        </p>

        {connection.map((c) => (
          <ul key={c._id} className="list  bg-base-200 rounded-box shadow-md w-1/2 my-2">
            <li className="list-row">
              <div>
                <img className="size-10 rounded-box" src={c.photoURL} />
              </div>
              <div>
                <div>{c.firstName + " " + c.lastName}</div>
              <span>{c.age + " , "+ c.gender }</span>
                <p className="list-col-wrap text-xs">{c.about}</p>
              </div>

<div className="mt-8">
   <Link to={"/chat/"+ c._id}>
          <LuSend />
          </Link>
</div>

         
            
              {/* <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z"></path>
                  </g>
                </svg>
              </button> */}
            </li>
          </ul>
        ))}
      </div>
    )
  );
};

export default Connections;
