const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

const alert = document.querySelector(".container .alert-box");
const btn = document.querySelector(".input-btn");


const toggle = document.querySelector(".toggle");
const toggle2 = document.querySelector(".toggle2");


// add event listener

toggle.addEventListener("click", toggleEvent1);
toggle2.addEventListener("click", toggleEvent2);
btn.addEventListener("click", pwdValidation);


// toggle event activation function
function toggleEvent1(){
    const p1 = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type", p1);

    //toggle icon
    this.classList.toggle("fa-eye-slash");
}

function toggleEvent2(){
    const p2 = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", p2);

    //toggle icon
    this.classList.toggle("fa-eye-slash");
}


// Password Validation


function pwdValidation(){
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    //console.log(password1);
    //console.log(password2);

    if (password1 == password2){
        alert.classList.add("alert-success");
        alert.classList.remove("alert-danger");
        alert.innerHTML = "<i class='fa-solid fa-circle-check'></i> Password Match";
    }
    else{
        alert.classList.add("alert-danger");
        alert.classList.remove("alert-success");
        alert.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Password Does not Match";
    }

}
