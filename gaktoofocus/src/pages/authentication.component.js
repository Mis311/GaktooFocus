import React from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
