import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="thumbnail">
      <img src={user.avatar} />
      <div className="caption">
        <h3>{user.name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
