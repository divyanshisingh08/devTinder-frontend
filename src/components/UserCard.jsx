import React from "react";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Default_Photo } from "../utils/constants";
import axios from "axios";

const UserCard = ({ user }) => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { _id, firstName, lastName, skills, photoURL, about, age, gender } =
    user;

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        {
          withCredentials: true,
        }
      );
      console.log("connection reuqest sent");
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="card bg-base-200 w-64 shadow-sm">
      <figure>
        <img src={photoURL} alt={firstName} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold  ">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4 ">
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
