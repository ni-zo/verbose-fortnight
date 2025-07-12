let spaceHolder = document.getElementById("currentYear");

document.addEventListener("DOMContentLoaded", () => {
  spaceHolder.innerHTML = new Date().getFullYear();
});
