'use client'
import React, { useState } from "react";
import Link from "next/link";

const Login = ({ setValid }) => {
  const names = ["mohan", "karan", "rahul"];

  const onButtonClick = () => {
    setValid(true);
  };
  return (
    <div id="login-page">
      <Link id="login-to-start" href="/">
        Start Page
      </Link>
      <br />
      <Link id="login-to-secret" href="/secretpage">
        Secret Page
      </Link>
      <br />
      <h2> Login page</h2>
      <input id="input" />
      <Link href="/secretpage">
        <button id="login-button" onClick={onButtonClick}>
          Login
        </button>
      </Link>
    </div>
  );
};
export default Login;
