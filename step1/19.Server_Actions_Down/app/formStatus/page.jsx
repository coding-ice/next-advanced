import React, { memo } from "react";
import SubmitButton from "./SubmitButton";

const page = memo(() => {
  return (
    <form action="">
      <input type="text" name="usname" />
      <SubmitButton />
    </form>
  );
});

export default page;
