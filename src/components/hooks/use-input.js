import  { useState } from "react";

const useInput = (validateData) => {
  const [enteredValue, setenteredValue] = useState(""); //validation on every single click
  const [enteredValueTouch, setenteredValueTouch] = useState(false);

  const enteredValueIsValid = validateData(enteredValue);
  const hasError = !enteredValueIsValid && enteredValueTouch;
  const valueChangeHandler = (event) => {
    setenteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setenteredValueTouch(true);
  };
  const reset = () => {
    setenteredValue("");
    setenteredValueTouch(false);
  };
  return {
    value: enteredValue,
    enteredValueIsValid,
    valueBlurHandler,
    valueChangeHandler,
    hasError,
    reset,
  };
};
export default useInput;
