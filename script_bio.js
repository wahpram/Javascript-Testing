const submit = document.getElementById("submit")
const checkbox1 = document.getElementById("checknama")
const checkbox2 = document.getElementById("checkalamat")
const checkbox3 = document.getElementById("checktelp")
const checkbox4 = document.getElementById("checkemail")
const checkbox5 = document.getElementById("checkpass")
const toggle = document.querySelector("#togglepass")
const password = document.querySelector("#pass")
const jk = document.querySelector("[name=jenis-kelamin]:checked")

let nama = document.getElementById("nama")
let alamat = document.getElementById("alamat")
let notlp = document.getElementById("no-tlp")
let email = document.getElementById("email")
let pass = document.getElementById("pass")

let nama_error = document.getElementById("nama-error")
let alamat_error = document.getElementById("alamat-error")
let notelp_error = document.getElementById("no-telp-error")
let email_error = document.getElementById("email-error")
let pass_error = document.getElementById("pass-error")

let btn = document.getElementById("submit");
btn.addEventListener("click", Alert);

function Alert(e){
    if(nama_error.classList.contains("visibility-hide") &&
        email_error.classList.contains("visibility-hide") &&
        alamat_error.classList.contains("visibility-hide") &&
        notelp_error.classList.contains("visibility-hide") &&
        pass_error.classList.contains("visibility-hide")) {

        alert("Selamat Datang\n"+nama.value);
    }
    else if(nama_error.classList.contains("visibility-show") ||
        email_error.classList.contains("visibility-show") || 
        alamat_error.classList.contains("visibility-show") ||
        notelp_error.classList.contains("visibility-show") ||
        pass_error.classList.contains("visibility-show")){

        e.preventDefault();
        alert("Data Yang Diinput Masih Salah");
    } 
} 

toggle.addEventListener('click', function(x){
    const type = password.getAttribute('type') == 'password'? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye');
})

nama.addEventListener("keyup",checknama);
alamat.addEventListener("keyup", checkalamat);
notlp.addEventListener("keyup", checknotelp);
email.addEventListener("keyup", chechkemail);
pass.addEventListener("keyup", checkpass);

checkbox1.addEventListener("keyup", checknama)
checkbox2.addEventListener("keyup", checkalamat)
checkbox3.addEventListener("keyup", checknotelp)
checkbox4.addEventListener("keyup", chechkemail)
checkbox5.addEventListener("keyup", checkpass)

function checknama(x){
    let regex = /^[^\s][a-zA-Z ]*$/
    
    if(regex.test(nama.value)){
        nama_error.classList.add("visibility-hide");
        nama_error.classList.remove("visibility-show");

        checkbox1.classList.add("visibility-show");
        checkbox1.classList.remove("visibility-hide");

        return true;
    }
    else{
        nama_error.classList.remove("visibility-hide");
        nama_error.classList.add("visibility-show");

        checkbox1.classList.remove("visibility-show");
        checkbox1.classList.add("visibility-hide");

        return true;
    }
}

function checkalamat(x){
    let regex = /^[^\s][a-zA-Z0-9 ]*$/
    
    if(regex.test(alamat.value)){
        alamat_error.classList.add("visibility-hide");
        alamat_error.classList.remove("visibility-show");

        checkbox2.classList.add("visibility-show");
        checkbox2.classList.remove("visibility-hide");

        return true;
    }
    else{
        alamat_error.classList.remove("visibility-hide");
        alamat_error.classList.add("visibility-show");

        checkbox2.classList.remove("visibility-show");
        checkbox2.classList.add("visibility-hide");

        return true;
    }
}

function checknotelp(x){
    let regex = /^[^\s][0-9]{9,9}$/

    if(regex.test(notlp.value)){
        notelp_error.classList.add("visibility-hide");
        notelp_error.classList.remove("visibility-show");

        checkbox3.classList.add("visibility-show");
        checkbox3.classList.remove("visibility-hide");

        return true;
    }
    else{
        notelp_error.classList.remove("visibility-hide");
        notelp_error.classList.add("visibility-show");

        checkbox3.classList.remove("visibility-show");
        checkbox3.classList.add("visibility-hide");

        return true;
    }
}

function chechkemail(x){
    let regex = /^[^\s][a-z0-9.]+@[a-z.]+\.[a-z]{2,3}$/gi

    if(regex.test(email.value)){
        email_error.classList.add("visibility-hide");
        email_error.classList.remove("visibility-show");

        checkbox4.classList.add("visibility-show");
        checkbox4.classList.remove("visibility-hide");

        return true;
    }
    else{
        email_error.classList.remove("visibility-hide");
        email_error.classList.add("visibility-show");

        checkbox4.classList.remove("visibility-show");
        checkbox4.classList.add("visibility-hide");

        return true;
    }
}

function checkpass(x){
    let regex = /^[^\s][a-zA-Z0-9]*$/

    if(regex.test(pass.value)){
        pass_error.classList.add("visibility-hide");
        pass_error.classList.remove("visibility-show");

        checkbox5.classList.add("visibility-show");
        checkbox5.classList.remove("visibility-hide");

        return true;
    }
    else{
        pass_error.classList.remove("visibility-hide");
        pass_error.classList.add("visibility-show");

        checkbox5.classList.remove("visibility-show");
        checkbox5.classList.add("visibility-hide");

        return true;
    }

}