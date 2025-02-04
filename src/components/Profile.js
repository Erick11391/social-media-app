import { useState } from 'react';

function Profile({ username }) {
  const [followers, setFollowers] = useState(['Wekesa', 'Kamau Ngui','MCA Tricky','Crazy Kennar','Andrew Kibe']);
  const [following, setFollowing] = useState(['Uhuru kenyatta','Sakaja','Pastor Nganga','Kasongo']);
  
  // /images folder
  const profileImageUrl = "/images/WhatsApp Image 2025-02-03 at 23.54.08_78c74133.jpg";

  const followUser = (user) => {
    if (!following.includes(user)) {
      setFollowing([...following, user]);
    }
  };

  const unfollowUser = (user) => {
    setFollowing(following.filter((name) => name !== user));
  

  
  };

  const removeFollower = (follower) => {
    setFollowers(followers.filter((name) => name !== follower));
  };

  return (
    <div className="profile">
      {/* Profile Picture */}
      <img src={profileImageUrl} alt="Profile" className="profile-pic" />
      
      <h1>{username}</h1>
      <p>Followers: {followers.length}</p>
      <p>Following: {following.length}</p>

      <div className="lists">
        <div className="followers">
          <h3>Followers</h3>
          <ul>
            {followers.map((follower, index) => (
              <li key={index}>
                {follower}
                <button onClick={() => removeFollower(follower)}>Remove Follower</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="following">
          <h3>Following</h3>
          <ul>
            {following.map((followed, index) => (
              <li key={index}>
                {followed}
                <button onClick={() => unfollowUser(followed)}>Unfollow</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="actions">
        <button onClick={() => followUser('Charlie Brown')}>Follow Kabugi</button>
       
      </div>
    </div>
  );
}

export default Profile;
