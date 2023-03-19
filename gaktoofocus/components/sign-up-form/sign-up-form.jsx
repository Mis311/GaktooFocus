import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../src/utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input-component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // so they have a display name when they dont sign up with email and password
      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("user creation encountered error", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Dont have an account</h2>
      <span>Sign up with email and password</span>
      <FormInput
        label={"DisplayName"}
        name="displayName"
        type="text"
        required="required"
        onChange={handleChange}
        value={displayName}
      />

      <FormInput
        label={"Email"}
        name="email"
        type="email"
        required="required"
        onChange={handleChange}
        value={email}
      />

      <FormInput
        label={"Password"}
        name="password"
        type="password"
        required="required"
        onChange={handleChange}
        value={password}
      />

      <FormInput
        label={"confirmPassword"}
        name="confirmPassword"
        type="password"
        required="required"
        onChange={handleChange}
        value={confirmPassword}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
