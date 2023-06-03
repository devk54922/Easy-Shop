



function showModal() {
  document.querySelector(".overlay").classList.add("show-overlay");
  document.querySelector(".logincont").classList.add("show-loginform");
}

function closeModal() {
  document.querySelector(".overlay").classList.remove("show-overlay");
  document.querySelector(".logincont").classList.remove("show-loginform");
}

const login = document.querySelector("#log_btn");
const crossBtn = document.querySelector("#cross_btn");

login.addEventListener("click", showModal);
crossBtn.addEventListener("click", closeModal);

const submitBtn = document.getElementById("submit_btn");
const existingBtn = document.getElementById("existing_user");
const signUp = document.getElementById("sign_up");
const signText = document.getElementById("sign_text");
const signPara = document.getElementById("sign_para");

signUp.addEventListener("click", () => {
  existingBtn.classList.add("existing_user");
  submitBtn.innerHTML = "CONTINUE";
  existingBtn.innerHTML = "Existing User? Log in";
  signText.innerHTML = `Looks like <br> you're <br> new here!`;
  signPara.innerHTML = "Sign up with your mobile number to get started";
  signUp.innerHTML = "";
});
existingBtn.addEventListener("click", () => {
  submitBtn.innerHTML = "Request OTP";
  existingBtn.classList.remove("existing_user");
  existingBtn.innerHTML = "";
  signText.innerHTML = `Login`;
  signPara.innerHTML =
    "Get access to your Orders, Wishlist and Recommendations";
  signUp.innerHTML = "New to EasyShop? Create an account";
});

//onclick to change login to my account
const cartItm = document.querySelector(".cart_itm");
const logInBtn = document.querySelector("#sign_text");

cartItm.addEventListener("click", () => {
  logInBtn.innerHTML = "My Account";
});
