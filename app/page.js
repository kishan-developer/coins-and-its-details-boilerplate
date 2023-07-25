import React from "react";
import Link from "next/link";

const Start = () => {
  return (
    <div id="start-page">
      <Link id="start-to-login" href="/login">
        Login Page
      </Link>
      <br />
      <Link id="start-to-secret" href="/secretpage">
        Secret Page
      </Link>
      <br />
      <h2>Welcome to Start page</h2>
    </div>
  );
};
export default Start;