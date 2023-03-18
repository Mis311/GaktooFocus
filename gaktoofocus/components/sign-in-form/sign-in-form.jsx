import React from "react";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAAuthUserWithEmailAndPassword,
} from "@/utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input-component";

const defaultFormFields = {
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = signInAAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {}
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  };

  return (
    <div>
      <h1>sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div>
          <button type="submit">Sign In</button>
          <button type="button" onClick={signInWithGoogle}>
            Google sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
