import { useState } from "react";
import useInputBasic from "../hooks/use-input-BasicForm";

const BasicForm = (props) => {
  const validateFirstName = (firstName) => {
    return firstName.trim() !== "";
  };

  const validateLastName = (lastName) => {
    return lastName.trim() !== "";
  };

  const validateEmail = (email) => {
    return email.trim() !== "" && email.includes("@") && email.includes(".com");
  };

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    inputHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetFirstNameInput,
  } = useInputBasic(validateFirstName);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    inputHandler: LastNameHandler,
    inputBlurHandler: LastNameBlurHandler,
    resetInput: resetLastNameInput,
  } = useInputBasic(validateLastName);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    inputHandler: EmailHandler,
    inputBlurHandler: EmailBlurHandler,
    resetInput: resetEmailInput,
  } = useInputBasic(validateEmail);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = enteredFirstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = enteredLastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <div className={firstNameInputClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={enteredFirstName}
            onBlur={firstNameBlurHandler}
            onChange={firstNameHandler}
          />
        </div>
        {enteredFirstNameHasError && (
          <p className="error-text">Entered first name is invalid</p>
        )}
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastName}
            onBlur={LastNameBlurHandler}
            onChange={LastNameHandler}
          />
        </div>
        {enteredLastNameHasError && (
          <p className="error-text">Entered last name is invalid</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onBlur={EmailBlurHandler}
          onChange={EmailHandler}
        />
      </div>
      {enteredEmailHasError && <p className="error-text">Email is invalid</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
