import React from "react";
import { useAuth } from "../context/AuthContext";
import { FiUser } from "react-icons/fi";

const Home: React.FC = () => {
  const { user } = useAuth();
  if (!user) return <div>Loading...</div>;

  return (
    <div className="relative z-0 max-w-3xl mx-auto mt-8">
      {/* Banner */}
      <div className="w-full h-32 rounded-t-2xl bg-gradient-to-r from-blue-400 to-purple-500 mb-4"></div>

      <div className="absolute left-1/5 transform -translate-x-1/2 -mt-16 border-4 border-white dark:border-gray-800 rounded-full bg-gray-300">
        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-4xl text-white font-bold overflow-hidden">
          <FiUser className="w-2/3 h-2/3 text-gray-500" />
        </div>
      </div>

      <div className="p-6 pt-18 bg-white dark:bg-gray-700 rounded-b-2xl shadow-md">
        <div className="space-x-6 relative">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {user.username}
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Joined {new Date(user.created_at).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Email: {user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;