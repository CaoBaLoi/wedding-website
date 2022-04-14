const Password = document.querySelector('#password')
const statusOfPassword = document.querySelector('#statusOfpassword')
const Username = document.querySelector('#username')
const statusOfUsername = document.querySelector('#statusOfusername')
const ComfirmPassword = document.querySelector('#comfirmPassword')
const statusOfComfirm = document.querySelector('#statusOfComfirm')
const submitBtn = document.querySelector('#btnsubmit')
function checkUsername(){
    const userNameRegex = /^[a-zA-Z0-9]{5,12}$/;
    if(userNameRegex.test(Username.value)){
        statusOfUsername.innerText = 'Valid Username'
        statusOfUsername.style.color = 'green'
    }
    else{
        statusOfUsername.innerText = 'Invalid Username'
        statusOfUsername.style.color = 'red'
    }
}
function checkPassword(){
    const passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if(passwordRegex.test(Password.value)){
        statusOfPassword.innerText = 'Valid Password'
        statusOfPassword.style.color = 'green'
    }
    else{
        statusOfPassword.innerText = 'Invalid Password'
        statusOfPassword.style.color = 'red'
    }
}
function chekComfirm(){
    if(ComfirmPassword.value == Password.value){
        statusOfComfirm.innerText = 'Correct Password'
        statusOfComfirm.style.color = 'green'
    }
    else{
        statusOfComfirm.innerText = 'Incorrect Password'
        statusOfComfirm.style.color = 'red'
    }
}
submitBtn.addEventListener('click',function(e){
    e.preventDefault()
    checkUsername()
    checkPassword()
    chekComfirm()
})