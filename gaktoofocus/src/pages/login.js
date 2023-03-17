import React from "react";

import { signInWithGooglePopup } from "../utils/firebase/firebase.utils.js";

const Login = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default Login;
