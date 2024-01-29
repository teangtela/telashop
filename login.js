const logIn = document.querySelector(".log-in");
const allInput = document.querySelectorAll(".input");

logIn.addEventListener("click", () => {
  let login = true;
  allInput.forEach((input) => {
    if (!input.value.trim()) {
      login = false;
    }
  });
  if (login) {
    window.alert("Log In Successful!!");
    window.location.href = "index.html";
    allInput.forEach((input) => {
      input.value = " ";
    });
  } else {
    window.alert("Please fill in all information.");
  }
});

const allIcon = document.querySelectorAll(".icon > p");
console.log(allIcon);
allIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    window.alert("Log In successful");
    window.location.href = "index.html";
  });
});
