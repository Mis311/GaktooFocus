import React, { useState, useEffect } from "react";

const UserBio = ({ userId }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const [friendStatus, setFriendStatus] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [checkedInStatus, setCheckedInStatus] = useState(false);
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    fetchUserStatus(userId);
  }, [userId]);

  //show today's date
  const today = new Date();
  const dateString = today.toLocaleDateString();

  const fetchUserStatus = async (userId) => {
    try {
      // Simulate a delay in the server response
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate some example user statuses
      const exampleData = {
        friendStatus: true,
        onlineStatus: true,
        checkedInStatus: true,
        todoList: [
          { id: 1, text: "Finish writing UserStatus component" },
          {
            id: 2,
            text: "Test UserStatus component with different user statuses",
          },
          { id: 3, text: "Submit UserStatus component for review" },
        ],
      };

      setFriendStatus(exampleData.friendStatus);
      setOnlineStatus(exampleData.onlineStatus);
      setCheckedInStatus(exampleData.checkedInStatus);
      if (exampleData.checkedInStatus) {
        setTodoList(exampleData.todoList);
      }
    } catch (error) {
      console.error(
        `Failed to fetch user status for user ${userId}: ${error.message}`
      );
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p>
        Future Bio: I am a professional programmer & Entrepreneur that's worth
        $300/hour
      </p>
      {friendStatus && (onlineStatus || checkedInStatus) && (
        <>
          {onlineStatus && (
            <div className="flex items-center">
              <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
              <span className="text-gray-700 font-medium">Online</span>
            </div>
          )}

          {checkedInStatus && (
            <>
              <div className="text-gray-700 font-medium">Checked in</div>
              <br></br><p>{dateString}'s Todolist</p>
              {todoList ? (
                <ul className="list-disc ml-4">
                  {todoList.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              ) : (
                <div className="text-gray-500">Loading to-do list...</div>
              )}
            </>
          )}
        </>
      )}

      <div className="flex items-center">
        <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
        <p className="text-sm font-medium mr-2">{userId}</p>
        <button
          className={`text-sm font-medium ${
            liked ? "text-red-500" : "text-gray-500"
          } hover:text-red-500 transition-colors`}
          onClick={handleLikeClick}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
};

export default UserBio;
