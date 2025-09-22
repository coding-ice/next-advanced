"use client";

import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    console.log("Profile");
  }, []);

  return <div>Profile</div>;
};

export default Profile;
