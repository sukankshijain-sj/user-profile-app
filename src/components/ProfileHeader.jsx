import React from 'react';

const ProfileHeader = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 mb-8 text-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            <p className="text-indigo-100 text-lg mb-1">{user.role}</p>
            <p className="text-indigo-200">{user.department}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={onEdit}
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-medium shadow-md"
          >
            Edit Profile
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium shadow-md"
          >
            Delete Profile
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <p className="text-indigo-200 text-sm">Email</p>
          <p className="font-medium truncate">{user.email}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <p className="text-indigo-200 text-sm">Location</p>
          <p className="font-medium">{user.location}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <p className="text-indigo-200 text-sm">Phone</p>
          <p className="font-medium">{user.phone}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <p className="text-indigo-200 text-sm">Join Date</p>
          <p className="font-medium">{new Date(user.joinDate).toLocaleDateString()}</p>
        </div>
      </div>

      {user.bio && (
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <p className="text-indigo-200 text-sm mb-2">Bio</p>
          <p className="text-white">{user.bio}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
