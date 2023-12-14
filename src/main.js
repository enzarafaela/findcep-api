import { fetchAddressFromCEP } from "./fetchAddressFromCEP.js";
import { checkErrors, riseError } from "./checkErrors.js";

const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");

buttonEl.addEventListener("click", handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    checkErrors(cep);
    const data = await fetchAddressFromCEP(cep);
    
    if (data) {
      const preEl = document.querySelector("pre");
      preEl.innerHTML = JSON.stringify(data);
    }
  } catch (error) {
    riseError(error);
  }
}
