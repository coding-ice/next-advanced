"use client";

import Button from "@/components/btns/button";

const HomePage = () => {
  return (
    <div>
      HomePage
      <button
        onClick={() => {
          console.log(process.env.NEXT_PUBLIC_USER_NAME);
        }}
      >
        get user name
      </button>
      <h3> {process.env.NEXT_PUBLIC_BASE_URL}</h3>
      <Button />
    </div>
  );
};

export default HomePage;
