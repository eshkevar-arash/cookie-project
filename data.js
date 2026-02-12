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
export {
  users,showToast,showErrorMessage,resetInputs,isExistUsername,isExistPassword
}
