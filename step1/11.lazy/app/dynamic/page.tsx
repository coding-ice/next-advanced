"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Profile = dynamic(() => import("./profile"), {
  loading: () => <div>Loading...</div>,
});

const DynamicPage = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <h3>dynamic</h3>
      <button onClick={() => setShowProfile(!showProfile)}>show profile</button>
      {showProfile && <Profile />}
    </div>
  );
};

export default DynamicPage;
