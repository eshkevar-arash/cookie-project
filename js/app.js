import {users,showToast,showErrorMessage,resetInputs,isExistUsername,isExistPassword} from "./../data.js";
const usernameInput = document.querySelector('.username')
const passwordInput = document.querySelector('.password')
const rememberMeCheckbox = document.querySelector('#remember-me')
const loginBtn =document.querySelector('.login-button')

resetInputs(usernameInput, passwordInput, rememberMeCheckbox)
loginBtn.addEventListener('click', event => {
  event.preventDefault()
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value

  if (!usernameValue){
    showErrorMessage('username is empty!')
  }else if (!passwordValue){
    showErrorMessage('password is empty')
  }else{
    const flag = users.some(user => {
      return user.username === usernameValue && user.password === passwordValue
    })
    if (!flag){
      showErrorMessage('user not found')
    }else {
      console.log('ok')
    }
  }
})
document.documentElement.addEventListener('DOMContentLoaded', () => {

})
/*const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const rememberMeCheckbox = document.querySelector("#remember-me");
const loginButton = document.querySelector(".login-button");

const login = (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    console.log("Successfully Logged In :))");

    if (rememberMeCheckbox.checked) {
      document.cookie = `userID=${user.id};path=/`;
    }
  } else {
    console.log("User not found !!");
  }
};

loginButton.addEventListener("click", login);*/
