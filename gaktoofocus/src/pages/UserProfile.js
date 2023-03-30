import React from "react";

function UserProfile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/150",
    bio: "Software developer and technology enthusiast.",
    location: "San Francisco, CA",
    joined: "January 2020",
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
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Stats</h2>
          <div className="border-t-2 border-gray-300 mt-4"></div>
          <div className="flex my-4">
            <div className="bg-gray-100 p-4 rounded-md mr-4">
              <h3 className="text-xl font-semibold">Followers</h3>
              <p className="text-gray-500">Number of followers: 1000</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-xl font-semibold">Following</h3>
              <p className="text-gray-500">Number of people following: 500</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Posts</h2>
          <div className="border-t-2 border-gray-300 mt-4"></div>
          <div className="flex flex-col my-4">
            <div className="border-2 rounded-md p-2 mb-2 bg-white">
              <div className="flex justify-between items-center mb-2">
                <div className="my-2">Post title</div>
              </div>
              <div className="text-sm font-medium">Post content</div>
            </div>
            <div className="border-2 rounded-md p-2 mb-2 bg-white">
              <div className="flex justify-between items-center mb-2">
                <div className="my-2">Post title</div>
              </div>
              <div className="text-sm font-medium">Post content</div>
            </div>
            <div className="border-2 rounded-md p-2 mb-2 bg-white">
              <div className="flex justify-between items-center mb-2">
                <div className="my-2">Post title</div>
              </div>
              <div className="text-sm font-medium">Post content</div>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default UserProfile;
