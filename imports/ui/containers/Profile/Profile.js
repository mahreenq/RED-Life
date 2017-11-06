import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="thumbnail">
      <img src={user.avatar} />
      <div className="caption">
        <h3>{user.name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Course: {user.course}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
