"use client";

import { createSports } from "../actions/actions";

const Button = () => (
  <button onClick={() => createSports("羽毛球")}>增加运动</button>
);

export default Button;
