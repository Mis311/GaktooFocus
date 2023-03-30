import React from 'react';

function UserProfile() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/150',
    bio: 'Software developer and technology enthusiast.',
    location: 'San Francisco, CA',
    joined: 'January 2020',
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0 md:mr-6"
          src={user.avatar}
          alt="User Avatar"
        />
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-2">{user.bio}</p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Location:</span> {user.location}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Joined:</span> {user.joined}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
