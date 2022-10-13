const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputEmail = document.querySelector("#email");

const inputs = document.querySelectorAll("input");

const form = document.querySelector(".test-form");

// btn.forEach((button) => {
//   button.addEventListener("click", () => {});

// });

// let inputNameValue = "";
// let inputSurnameValue = "";
// let inputEmailValue = "";

const nameInput = {
  name: "",
  value: "",
};

const arr = [];

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    const { name, value } = e.target;
    nameInput.name = name;
    nameInput.value = value;
    arr.push({ name: name, value: value });
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(arr);
});
