import React from 'react'
import { useState } from 'react'
import './App.css'

export default function App() {

  const [followState, setFollowState] = useState(false);
  const [followBtn, setFollowBtn] = useState("Follow +");

  function handleFollow() {
    setFollowState(!followState);
    if (followState) {
      setFollowBtn("Follow +");
    } else {
      setFollowBtn("Following");
    }
  }

  return (
    <div className='container'>
      <div className='card'>
        {/* image */}
        <img src="profile.jpg" alt="profile" className='profile-img' />
        {/* text box */}
        <div className='text-box'>
          <h1>Miyamoto Musashi</h1>
          <h3>Japanese artist and writer</h3>
          <p>Miyamoto Musashi, was a Japanese swordsman, strategist, artist, and writer who became renowned through stories of his unique double-bladed swordsmanship and undefeated record in his 62 duels.</p>
        </div>
        {/* social media */}
        <div className='social-media'>
          <button onClick={handleFollow} className={followBtn}>{followBtn}</button>
        </div>
      </div>
    </div>
  )
}
