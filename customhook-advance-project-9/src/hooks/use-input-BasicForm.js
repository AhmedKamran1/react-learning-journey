import { useState } from "react";

const useInputBasic = (validateEnteredValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateEnteredValue(enteredValue);
  const hasError = isTouched && !isValid;

  const inputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetInput = (event) => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: isValid,
    hasError: hasError,
    inputHandler,
    inputBlurHandler,
    resetInput,
  };
};
export default useInputBasic;
