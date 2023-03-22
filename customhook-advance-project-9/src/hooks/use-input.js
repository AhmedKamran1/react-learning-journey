import { useReducer, useState } from "react";

const inputStateReducer = (prevState, action) => {
  if (action.type === "Value") {
    return {
      enteredValue: action.value,
      isTouched: prevState.isTouched,
    };
  }
  if (action.type === "Blur") {
    return {
      enteredValue: prevState.enteredValue,
      isTouched: true,
    };
  }
  if (action.type === "Reset") {
    return {
      enteredValue: "",
      isTouched: false,
    };
  }
};

const useInput = (validateValue) => {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const [inputState, dispatchEvent] = useReducer(inputStateReducer, {
    enteredValue: "",
    isTouched: false,
  });

  const valueIsValid = validateValue(inputState.enteredValue);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchEvent({ type: "Value", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatchEvent({ type: "Blur" });
  };

  const reset = () => {
    dispatchEvent({ type: "Reset" });
  };

  return {
    value: inputState.enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
