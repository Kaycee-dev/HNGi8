const sign_in_btn = document.querySelector(".panel.right-panel");
const sign_up_btn = document.querySelector(".panel.left-panel");
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const resume = document.querySelector("#resume");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  // $("#resume").hide();
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  // $("#resume").show();
});