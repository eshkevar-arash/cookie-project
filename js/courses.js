const h3Elem = document.querySelector('h3')
document.addEventListener('DOMContentLoaded', () => {
    let userId = CookieManager.get('id')
    console.log(userId)
    console.log(typeof userId)
    if (userId){
        userId = Number(userId)
        const selectUser = users.find(user => {
            return user.id === userId
        })
        h3Elem.textContent = `welcome ${selectUser.username}`
    }else {
        h3Elem.textContent = 'register or login'
    }
})
