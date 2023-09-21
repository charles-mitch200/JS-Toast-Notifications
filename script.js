const buttonElems = document.querySelectorAll("button");
const toastBox = document.getElementById("toast-box");

let toastContent;

// Function to display the notification toast
const showToast = () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = toastContent;
  toastBox.appendChild(toast);

  if (toastContent.includes("error")) {
    toast.classList.add("error");
  }
  if (toastContent.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
};

//  Add event listener to all the buttons and diasplay a different toast when each button is clicked
buttonElems.forEach((btn) => {
  btn.addEventListener("click", () => {
    toastContent =
      btn.innerText === "Success"
        ? `<i class="fa-solid fa-circle-check"></i> Successfully Submitted!`
        : btn.innerText === `Error`
        ? `<i class="fa-solid fa-circle-xmark"></i>Please fix the error!`
        : `<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again!`;
    showToast();
  });
});
