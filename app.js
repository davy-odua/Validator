// (/^[A-Za-z]*\s{1}[A-Za-z]*$/)
// <i class="fa-solid fa-circle-check"></i>
// (/^[0-9]{10}$/)
// (/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)

let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
    let name = document.getElementById("contact-name").value;

    if(name.length === 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Invalid input';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validatePhone(){
    let phone = document.getElementById('contact-phone').value ;

    if(phone.length === 0){
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    else if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Invalid input';
        return false;
    }
    else if(phone.length !== 10){
        phoneError.innerHTML = 'Phone must have 10 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return false;
}

function validateEmail(){
    let email = document.getElementById('contact-email').value;

    if (email.length === 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid input';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('contact-message').value;
    let left = 30 - message.length;

    if (message.length === 0){
        messageError.innerHTML = 'Message is required';
        return false;
    }
    else if( left <= 30 && left > 0 ){
        messageError.innerHTML = `${left} characters remaining`;
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Fix Errors to submit';
        setTimeout(function(){submitError.style.display = 'none'}, 3000);
        return false;
    }

    submitError.innerHTML = '<h3>submitted successfully</h3>';
    setTimeout(function(){submitError.style.display = 'none'}, 3000);
    return false;

}

