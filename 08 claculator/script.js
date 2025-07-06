let result = document.querySelector(".inputBox");
let keys = document.querySelectorAll("button");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];

  if (key.innerHTML === "=") {
    key.addEventListener("click", ()=>{
      result.value=eval(result.value);
    });
  } else if (key.classList.contains("clear")) {
    key.addEventListener("click", () => {
      result.value = "";
    });
  } else if (key.classList.contains("delete")) {
    key.addEventListener("click", () => {
      result.value = result.value.slice(0, -1);
    });
  } else {
    key.addEventListener("click", function () {
      result.value += key.innerHTML;
    });
  }
}

