import React from "react";
import { useSelector } from "react-redux";

function Tests() {
  const email = useSelector((state) => state.authentication.email);
  const password = useSelector((state) => state.authentication.password);

  console.log(email)
  console.log(password)

  return (
    <div>
      <h1>h1 = {email}</h1>
      <h2>h2 = {password}</h2>
    </div>
  )
};

export default Tests;
