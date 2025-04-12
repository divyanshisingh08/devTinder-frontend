import React from 'react'

const UserCard = ({user}) => {
  const {firstName,lastName,skills,photoURL,about}=user;
  return (
    <div className="card bg-base-200 w-64 shadow-sm">
  <figure>
    <img
      src={photoURL}
      alt={firstName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-secondary">Interested</button>
      <button className="btn btn-primary">Ignore</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
