const empty = "",
  uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*=-_";

let pLength = document.getElementById("p-length");
let uppercase = document.getElementById("p-uppercase");
let lowercase = document.getElementById("p-lowercase");
let pNumber = document.getElementById("p-number");
let pSymbol = document.getElementById("p-symbol");
let submit = document.getElementById("submit");
let password = document.getElementById("password");
let copy = document.getElementById("copy");

submit.addEventListener("click", () => {
  let initialPassword = empty;
  if (uppercase.checked) initialPassword += uCase;
  if (lowercase.checked) initialPassword += lCase;
  if (pNumber.checked) initialPassword += number;
  if (pSymbol.checked) initialPassword += symbol;

  password.value = generate(parseInt(pLength.value), initialPassword);
});

function generate(l, initialPassword) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}
copy.addEventListener("click", () => {
  if (password.value == "") {
    alert("Please generate a password");
  } else {
    password.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard");
  }
});