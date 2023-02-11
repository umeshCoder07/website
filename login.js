
let signupBtn=document.getElementById("signup-btn")
let signup=document.getElementById("signup")
let login=document.getElementById("login")
signupBtn.addEventListener("click",function(){
signup.classList.toggle("none")
login.classList.toggle("none")
if(signup.classList.contains("none")){
    signupBtn.textContent="Sign-up"
    signupBtn.style.padding=" 1rem 13.5rem"
}
else{
    signupBtn.textContent="Log-in"
    

}
})