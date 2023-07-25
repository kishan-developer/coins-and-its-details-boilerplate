'use client'

import React from "react";
import Link from "next/link";

const SecretPage = ({ setValid }) => {

  return (
    <div id="secret-page">
      <Link id="secret-to-login" href="/login">
        Login Page
      </Link>
      <br />
      <Link id="secret-to-start" href="/">
        start Page
      </Link>
      <br />
      <h2>Welcome to secret Info page !!!! </h2>
      <button id="logout-button" onClick={() => setValid(false)}>
        Logout
      </button>
    </div>
  );
};
export default SecretPage;