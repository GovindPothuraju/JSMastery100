const btn = document.querySelector(".btn");
const pasteBtn = document.querySelector(".paste-btn");
const input = document.querySelector(".coupon"); // input field

// Copy the content of the input field
btn.addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText(input.value)
    .then(() => {
      btn.textContent = "Copied!!!";
      setTimeout(() => {
        btn.textContent = "Copy";
      }, 3000);
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
});

// Clear the field and then paste from clipboard
pasteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  input.value = ""; // clear the input to show paste clearly
  navigator.clipboard.readText()
    .then(text => {
      input.value = text; // paste copied content back into the same field
    })
    .catch(err => {
      console.error("Failed to read clipboard contents: ", err);
    });
});


