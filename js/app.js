const Toast = Swal.mixin({
  showClass: {
    popup: `
                      animate__animated
                      animate__fadeInDown
                      animate__faster
                    `
  },
  hideClass: {
    popup: `
                      animate__animated
                      animate__fadeOutRight
                      animate__faster
                    `
  },
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
const CookieManager = {
  // ساختن یا آپدیت کوکی
  set: function(name, value, days) {
    let expires = ""
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = "expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + value + "; path=/; " + expires
  },

  // خوندن کوکی
  get: function(name) {
    const nameEQ = name + "="
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim()
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length)
    }
    return null
  },

  // حذف کوکی
  delete: function(name) {
    document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  }
}
function showErrorMessage(msg){
  Swal.fire({
    title: msg,
    icon: 'error'
  })
}
function showToast(msg){
  Toast.fire({
    title: msg,
    icon: 'success',
    /*didClose: () => {
      console.log('✅ Toast بسته شد');
    }*/
  });
}
const users = [
  {
    id: 1,
    username: "amin",
    age: 24,
    password: "amin121212",
    email: "amin@gmail.com",
  },
  {
    id: 2,
    username: "amir",
    age: 25,
    password: "amir121212",
    email: "amir@gmail.com",
  },
  {
    id: 3,
    username: "ali",
    age: 18,
    password: "ali121212",
    email: "ali@gmail.com",
  },
  {
    id: 4,
    username: "mmd",
    age: 25,
    password: "mmd121212",
    email: "mmd@gmail.com",
  },
  {
    id: 5,
    username: "babak",
    age: 21,
    password: "babak121212",
    email: "babak@gmail.com",
  },
];
function resetInputs(username, password, rememberMe){
  username.value = ''
  password.value = ''
  rememberMe.checked = false
}
function isExistUsername(username){
  return users.some(user => {
    return user.username === username
  })
}
function isExistPassword(password){
  return users.some(user => {
    return user.password === password
  })
}













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
