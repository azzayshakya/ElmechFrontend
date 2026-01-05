import React from 'react';
import useUserProfile from '../hooks/useUserProfile'; // Path to your custom hook
import './UserProfile.css';

const UserProfile = () => {
  const { data, isLoading, isError, error } = useUserProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={data.profilePhoto} alt="Profile" className="profile-photo" />
        <div className="profile-info">
          <h2 className="username">{data.username}</h2>
          <p className="name">
            {data.firstName} {data.lastName}
          </p>
          <p className="email">{data.email}</p>
          <p className="phone">{data.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
