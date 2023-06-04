import { inputsChangeHandler, buttonCalculateClickHandler, inputForResetChangeHandler, resetButtonClickHandler } from "./handler.js";

const buttonCalculateElement = document.querySelector(".form__submit-button");
const resetButtonElement = document.querySelector(".form__reset-button");
const inputsGroupElement = document.querySelector(".inputs-group");

inputsGroupElement.addEventListener("change", inputsChangeHandler);
buttonCalculateElement.addEventListener("click", buttonCalculateClickHandler);
inputsGroupElement.addEventListener("change", inputForResetChangeHandler);
resetButtonElement.addEventListener("click", resetButtonClickHandler);
