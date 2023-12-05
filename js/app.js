const allNumbers = document.querySelector(".buttons");
const operations = document.querySelector(".operation");
const input = document.querySelector(".input");

allNumbers.addEventListener("click", function (event) {
  if (!event.target.classList.contains("number")) return;

  const value = event.target.innerText;

  switch (value) {
    case "=":
      input.innerText = eval(input.innerText);
      break;
    case "C":
      input.innerText = "";
      break;

    default:
      input.innerText += value;
  }
});

