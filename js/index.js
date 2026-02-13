const usernameInput = document.querySelector('.username')
const passwordInput = document.querySelector('.password')
const rememberMeInput = document.querySelector('#remember-me')
const loginBtn = document.querySelector('.login-button')
document.addEventListener('DOMContentLoaded', () => {
    resetInputs(usernameInput, passwordInput, rememberMeInput)
    let userId = CookieManager.get('id')
    console.log(userId)
    console.log(typeof userId)
    if (userId){
        userId = Number(userId)
        const selectUser = users.find(user => {
            return user.id === userId
        })
        usernameInput.value = selectUser.username
        passwordInput.value = selectUser.password
    }
})
loginBtn.addEventListener('click', event => {
    event.preventDefault()
    const usernameValue = usernameInput.value.trim()
    const passwordValue = passwordInput.value.trim()
    if (!usernameValue){
        showErrorMessage('username is empty')
    }else if (!passwordValue){
        showErrorMessage('Password is empty')
    }else {
        const userData = users.find(user => {
            return user.username === usernameValue && user.password === passwordValue
        })
        if (!userData){
            showErrorMessage('user not found')
        }else {
            if (rememberMeInput.checked){
                CookieManager.set('id',userData.id, 2)
            }else {
                CookieManager.set('id',userData.id, 0)
            }
            window.location.href = 'courses.html'
        }
    }
})
