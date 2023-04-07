import React from "react";

function ProfilePage() {
  const profilePicUrl = "https://example.com/profile_pic.jpg";
  const firstName = "John";
  const lastName = "Doe";
  const username = "johndoe";
  const organization = "Example Inc.";
  const overallLikes = 12345;

  function handleSettingsClick() {
    // handle click on settings button
  }

  function handleAnalyticsClick() {
    // handle click on analytics button
  }

  return (
    <div>
      <img src={profilePicUrl} alt="Profile" />
      <h1>{firstName} {lastName}</h1>
      <p>{username}</p>
      <p>{organization}</p>
      <p>Overall Likes: {overallLikes}</p>
      <button onClick={handleSettingsClick}>
        <i className="fas fa-cog"></i> Settings
      </button>
      <button onClick={handleAnalyticsClick}>
        <i className="fas fa-chart-line"></i> Analytics
      </button>
    </div>
  );
}

export default ProfilePage;
